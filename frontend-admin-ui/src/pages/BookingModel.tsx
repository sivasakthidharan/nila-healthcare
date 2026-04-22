// components/BookingModal.tsx (updated with Payment step)
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from "date-fns";

type ServiceType = "individual" | "couple";
type PackageOption = {
  id: string;
  name: string;
  sessions: number;
  price: number;
  discount?: number;
};

interface BookingData {
  serviceType: ServiceType | null;
  package: PackageOption | null;
  expertId: number;
  expertName: string;
  date: Date | null;
  timeSlot: string | null;
  patient: {
    name: string;
    email: string;
    whatsapp: string;
    mode: "video" | "audio" | "chat" | "";
    referral: string;
  };
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  expert: { id: number; name: string };
}

const INDIVIDUAL_PACKAGES: PackageOption[] = [
  { id: "indiv_single", name: "Single Session", sessions: 1, price: 100 },
  { id: "indiv_4", name: "Individual Therapy - 4 Sessions", sessions: 4, price: 360, discount: 10 },
  { id: "indiv_8", name: "Individual Therapy - 8 Sessions", sessions: 8, price: 680, discount: 15 },
  { id: "indiv_12", name: "Individual Therapy - 12 Sessions", sessions: 12, price: 960, discount: 20 },
];

const COUPLE_PACKAGES: PackageOption[] = [
  { id: "couple_single", name: "Single Session", sessions: 1, price: 150 },
  { id: "couple_4", name: "Couple Therapy - 4 Sessions", sessions: 4, price: 540, discount: 10 },
  { id: "couple_8", name: "Couple Therapy - 8 Sessions", sessions: 8, price: 1020, discount: 15 },
  { id: "couple_12", name: "Couple Therapy - 12 Sessions", sessions: 12, price: 1440, discount: 20 },
];

const fetchTimeSlots = async (_expertId: number, _date: Date): Promise<string[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return ["12:00 PM - 1:00 PM", "1:15 PM - 2:15 PM", "2:15 PM - 3:15 PM", "3:15 PM - 4:15 PM", "5:00 PM - 6:00 PM"];
};

export default function BookingModal({ isOpen, onClose, expert }: Props) {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>({
    serviceType: null,
    package: null,
    expertId: expert.id,
    expertName: expert.name,
    date: null,
    timeSlot: null,
    patient: { name: "", email: "", whatsapp: "", mode: "", referral: "" },
  });
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [submitting, setSubmitting] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    if (step === 3 && booking.date) {
      setLoadingSlots(true);
      fetchTimeSlots(expert.id, booking.date)
        .then(setAvailableSlots)
        .finally(() => setLoadingSlots(false));
    }
  }, [step, booking.date, expert.id]);

  if (!isOpen) return null;

  const updateBooking = (key: keyof BookingData, value: any) => {
    setBooking((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !booking.serviceType) return;
    if (step === 2 && !booking.package) return;
    if (step === 3 && (!booking.date || !booking.timeSlot)) return;
    if (step === 4 && (!booking.patient.name || !booking.patient.email || !booking.patient.whatsapp || !booking.patient.mode)) return;
    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const applyCoupon = () => {
    // Simple demo coupon: "SAVE10" gives 10% off
    if (couponCode.toUpperCase() === "SAVE10" && !couponApplied) {
      const total = booking.package?.price || 0;
      setDiscount(total * 0.1);
      setCouponApplied(true);
    } else if (couponApplied) {
      // already applied
      return;
    } else {
      alert("Invalid coupon");
    }
  };

  const totalAmount = (booking.package?.price || 0) - discount;

//   const handleSubmit = async () => {
//     const { serviceType, package: pkg, expertId, expertName, date, timeSlot, patient } = booking;
//     if (!serviceType || !pkg || !date || !timeSlot) return;
//     if (!patient.name || !patient.email || !patient.whatsapp || !patient.mode) return;

//     setSubmitting(true);
//     try {
//       const payload = {
//         patient_name: patient.name,
//         patient_email: patient.email,
//         patient_whatsapp: patient.whatsapp,
//         therapist_name: expertName,
//         appointment_date: format(date, "yyyy-MM-dd"),
//         appointment_time: timeSlot.split(" - ")[0], // e.g., "1:15 PM"
//         duration: pkg.sessions * 60, // total minutes for all sessions
//         status: "confirmed",
//         type: serviceType,
//         notes: `Package: ${pkg.name}, Sessions: ${pkg.sessions}, Therapy mode: ${patient.mode}, Referral: ${patient.referral || "N/A"}, Coupon discount: ₹${discount}`,
//         phone: patient.whatsapp,
//         email: patient.email,
//         total_price: totalAmount,
//         sessions_count: pkg.sessions,
//         coupon_discount: discount
//       };

//       const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
//       const response = await fetch(`${API_BASE}/api/appointments/book`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Booking failed");
//       }

//       const result = await response.json();
//       alert(result.message || "Booking submitted successfully!");
//       onClose();
//       // Reset state
//       setStep(1);
//       setBooking({
//         serviceType: null,
//         package: null,
//         expertId: expert.id,
//         expertName: expert.name,
//         date: null,
//         timeSlot: null,
//         patient: { name: "", email: "", whatsapp: "", mode: "", referral: "" },
//       });
//       setCouponCode("");
//       setDiscount(0);
//       setCouponApplied(false);
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message || "Booking failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };




  // Calendar helpers
 

//   const handleSubmit = async () => {
//   const { serviceType, package: pkg, expertId, expertName, date, timeSlot, patient } = booking;
//   if (!serviceType || !pkg || !date || !timeSlot) return;
//   if (!patient.name || !patient.email || !patient.whatsapp || !patient.mode) return;

//   setSubmitting(true);
//   try {
//     // Parse time from slot (e.g., "1:15 PM - 2:15 PM" -> "1:15 PM")
//     const startTime = timeSlot.split(" - ")[0];
//     // Convert to 24-hour format if needed, or keep as is – your backend accepts string like "1:15 PM"
    
//     // Prepare notes with package, sessions, discount, referral, mode
//     const notes = `Package: ${pkg.name}, Sessions: ${pkg.sessions}, Mode: ${patient.mode}, Referral: ${patient.referral || "N/A"}, Coupon discount: ₹${discount}, Total paid: ₹${totalAmount}`;

//     const payload = {
//       patient_name: patient.name,
//       phone: patient.whatsapp,
//       email: patient.email,
//       therapist_name: expertName,
//       appointment_date: format(date, "yyyy-MM-dd"),
//       appointment_time: startTime,          // e.g., "1:15 PM"
//       duration: pkg.sessions * 60,          // total minutes (e.g., 4 sessions * 60 = 240)
//       status: "confirmed",
//       type: serviceType,                    // "individual" or "couple"
//       notes: notes,
//       patient_id: null,                     // optional, you can set later if user logged in
//     };

//     const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
//     const response = await fetch(`${API_BASE}/api/appointments`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Booking failed");
//     }

//     const result = await response.json();
//     alert("Appointment booked successfully!");
//     onClose();
//     // Reset state
//     setStep(1);
//     setBooking({
//       serviceType: null,
//       package: null,
//       expertId: expert.id,
//       expertName: expert.name,
//       date: null,
//       timeSlot: null,
//       patient: { name: "", email: "", whatsapp: "", mode: "", referral: "" },
//     });
//     setCouponCode("");
//     setDiscount(0);
//     setCouponApplied(false);
//   } catch (err: any) {
//     console.error(err);
//     alert(err.message || "Booking failed. Please try again.");
//   } finally {
//     setSubmitting(false);
//   }
// };



const handleSubmit = async () => {
  const { serviceType, package: pkg, expertName, date, timeSlot, patient } = booking;

  if (!serviceType || !pkg || !date || !timeSlot) return;
  if (!patient.name || !patient.email || !patient.whatsapp || !patient.mode) return;

  setSubmitting(true);

  try {
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // 🔹 STEP 1: Create Razorpay Order from backend
    const orderRes = await fetch(`${API_BASE}/api/payment/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalAmount * 100, // paisa
            //newly add
        patientName: patient.name,
    patientId: patient.whatsapp,
      }),
    });

    const orderData = await orderRes.json();

    if (!orderData.id) {
      throw new Error("Failed to create Razorpay order");
    }

    // 🔹 STEP 2: Open Razorpay popup
    const options = {
      key: "rzp_test_RBxndd6SfS8vVC", // 🔴 replace with your key
      amount: orderData.amount,
      currency: "INR",
      name: "Oppam Therapy",
      description: "Appointment Booking",
      order_id: orderData.id,

      handler: async function (response: any) {

          // ✅ FAKE SUCCESS (skip verification)
  console.log("Fake Payment Success:", response);
//          // ✅ STEP 1: VERIFY PAYMENT
//   const verifyRes = await fetch(`${API_BASE}/api/payment/verify-payment`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       razorpay_order_id: response.razorpay_order_id,
//       razorpay_payment_id: response.razorpay_payment_id,
//       razorpay_signature: response.razorpay_signature,
//       patientName: patient.name,
//       patientId: patient.whatsapp,
//     }),
//   });

//   const verifyData = await verifyRes.json();

//   if (!verifyData.success) {
//     alert("❌ Payment verification failed!");
//     return;
//   }
        // 🔹 Payment success

        // Now save booking AFTER payment success
        const payload = {
          patient_name: patient.name,
          phone: patient.whatsapp,
          email: patient.email,
          therapist_name: expertName,
          appointment_date: format(date, "yyyy-MM-dd"),
          appointment_time: timeSlot.split(" - ")[0],
          duration: pkg.sessions * 60,
          status: "confirmed",
          type: serviceType,
          notes: `Payment ID: ${response.razorpay_payment_id}`,
        };

        const saveRes = await fetch(`${API_BASE}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!saveRes.ok) {
          alert("Payment success, but booking failed!");
          return;
        }

        alert("Payment successful & appointment booked!");

        onClose();
      },

      prefill: {
        name: patient.name,
        email: patient.email,
        contact: patient.whatsapp,
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();

  } catch (err: any) {
    console.error(err);
    alert(err.message || "Payment failed");
  } finally {
    setSubmitting(false);
  }
};
 
 
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const days = Array.from({ length: 42 }, (_, i) => addDays(startDate, i));
  const changeWeek = (dir: "prev" | "next") => {
    setCurrentMonth((prev) => (dir === "prev" ? subWeeks(prev, 1) : addWeeks(prev, 1)));
  };

  // Step 1: Service Type
  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Select Service</h3>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => updateBooking("serviceType", "individual")} className={`p-4 border rounded-xl text-center transition ${booking.serviceType === "individual" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>🧑 Individual Therapy</button>
        <button onClick={() => updateBooking("serviceType", "couple")} className={`p-4 border rounded-xl text-center transition ${booking.serviceType === "couple" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>💑 Couple Therapy</button>
      </div>
    </div>
  );

  // Step 2: Package
  const renderStep2 = () => {
    const packages = booking.serviceType === "individual" ? INDIVIDUAL_PACKAGES : COUPLE_PACKAGES;
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Select Package</h3>
        <div className="space-y-3">
          {packages.map((pkg) => (
            <button key={pkg.id} onClick={() => updateBooking("package", pkg)} className={`w-full p-4 border rounded-xl text-left transition ${booking.package?.id === pkg.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>
              <div className="flex justify-between items-center">
                <div><div className="font-medium">{pkg.name}</div><div className="text-sm text-gray-500">{pkg.sessions} sessions</div></div>
                <div className="text-right"><div className="font-bold text-lg">₹{pkg.price.toLocaleString()}</div>{pkg.discount && <div className="text-xs text-green-600">Save {pkg.discount}%</div>}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Step 3: Date & Time
  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Select Date & Time</h3>
      <div className="border rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => changeWeek("prev")} className="p-1 rounded hover:bg-gray-100"><ChevronLeft size={20} /></button>
          <span className="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
          <button onClick={() => changeWeek("next")} className="p-1 rounded hover:bg-gray-100"><ChevronRight size={20} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} className="font-medium text-gray-500">{d}</div>)}</div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            const isToday = isSameDay(day, new Date());
            const isSelected = booking.date && isSameDay(day, booking.date);
            const isPast = day < new Date() && !isToday;
            return <button key={i} disabled={isPast} onClick={() => updateBooking("date", day)} className={`p-2 rounded-full text-center text-sm transition ${isSelected ? "bg-blue-500 text-white" : isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"} ${isToday && !isSelected ? "border border-blue-300" : ""}`}>{format(day, "d")}</button>;
          })}
        </div>
      </div>
      {booking.date && (<div><div className="font-medium mb-2 flex items-center gap-2"><Clock size={16} /> Available Slots for {format(booking.date, "MMM dd, yyyy")}</div>{loadingSlots ? <div className="text-center py-4">Loading slots...</div> : <div className="grid grid-cols-2 gap-2">{availableSlots.map(slot => (<button key={slot} onClick={() => updateBooking("timeSlot", slot)} className={`p-2 border rounded-lg text-sm transition ${booking.timeSlot === slot ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}>{slot}</button>))}</div>}</div>)}
    </div>
  );

  // Step 4: Patient Information
  const renderStep4 = () => {
    const { patient } = booking;
    const updatePatient = (field: keyof typeof patient, value: string) => setBooking(prev => ({ ...prev, patient: { ...prev.patient, [field]: value } }));
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-semibold">Your Information</h3>
        <div><label className="block text-sm font-medium mb-1">Name *</label><input type="text" value={patient.name} onChange={e => updatePatient("name", e.target.value)} className="w-full border rounded-lg p-2" placeholder="Enter name" /></div>
        <div><label className="block text-sm font-medium mb-1">Email *</label><input type="email" value={patient.email} onChange={e => updatePatient("email", e.target.value)} className="w-full border rounded-lg p-2" placeholder="Enter email" /></div>
        <div><label className="block text-sm font-medium mb-1">WhatsApp Number *</label><input type="tel" value={patient.whatsapp} onChange={e => updatePatient("whatsapp", e.target.value)} className="w-full border rounded-lg p-2" placeholder="Enter phone" /><p className="text-xs text-gray-500 mt-1">By entering your phone number you agree to receive messages via WhatsApp</p></div>
        <div><label className="block text-sm font-medium mb-1">Mode of Therapy *</label><div className="flex gap-4">{["video","audio","chat"].map(mode => (<label key={mode} className="flex items-center gap-2"><input type="radio" name="mode" value={mode} checked={patient.mode === mode} onChange={e => updatePatient("mode", e.target.value as any)} /><span className="capitalize">{mode} Call</span></label>))}</div></div>
        <div><label className="block text-sm font-medium mb-1">How did you find out about Oppam?</label><select value={patient.referral} onChange={e => updatePatient("referral", e.target.value)} className="w-full border rounded-lg p-2"><option value="">Select</option><option value="google">Google</option><option value="instagram">Instagram</option><option value="friend">Friend/Family</option><option value="other">Other</option></select></div>
      </div>
    );
  };

  // Step 5: Payment Summary
  const renderStep5 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Payments</h3>
      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
        <div className="flex justify-between"><span className="text-gray-600">Package</span><span className="font-medium">{booking.package?.name}</span></div>
        <div className="flex justify-between"><span className="text-gray-600">Price</span><span className="font-medium">₹{booking.package?.price.toLocaleString()}</span></div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1"><input type="text" placeholder="Coupon code" value={couponCode} onChange={e => setCouponCode(e.target.value)} className="w-full border rounded-lg p-2 text-sm" /></div>
          <button onClick={applyCoupon} disabled={couponApplied} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50">Add</button>
        </div>
        {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>- ₹{discount}</span></div>}
        <div className="border-t pt-3 flex justify-between font-bold text-lg"><span>Total Amount:</span><span>₹{totalAmount.toLocaleString()}</span></div>
      </div>
    </div>
  );

  const isLastStep = step === 5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Book Appointment with {expert.name}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X size={20} /></button>
        </div>
        <div className="p-6">
          <div className="flex mb-6">
            {[1,2,3,4,5].map(s => (
              <div key={s} className="flex-1 text-center">
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm ${step >= s ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"}`}>{s}</div>
                <div className="text-xs mt-1 text-gray-500">{s===1?"Service":s===2?"Package":s===3?"DateTime":s===4?"Details":"Payment"}</div>
              </div>
            ))}
          </div>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
          <div className="flex justify-between mt-8">
            {step > 1 && <button onClick={handleBack} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Back</button>}
            {!isLastStep ? (
              <button onClick={handleNext} disabled={(step===1 && !booking.serviceType) || (step===2 && !booking.package) || (step===3 && (!booking.date || !booking.timeSlot)) || (step===4 && (!booking.patient.name || !booking.patient.email || !booking.patient.whatsapp || !booking.patient.mode))} className="ml-auto px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">Continue</button>
            ) : (
              <button onClick={handleSubmit} disabled={submitting} className="ml-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50">{submitting ? "Processing..." : "Confirm & Pay"}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}