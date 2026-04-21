// components/BookingModal.tsx
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay, parseISO } from "date-fns";

// Types
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

// Packages data
const INDIVIDUAL_PACKAGES: PackageOption[] = [
  { id: "indiv_single", name: "Single Session", sessions: 1, price: 1000 },
  { id: "indiv_4", name: "Individual Therapy - 4 Sessions", sessions: 4, price: 3600, discount: 10 },
  { id: "indiv_8", name: "Individual Therapy - 8 Sessions", sessions: 8, price: 6800, discount: 15 },
  { id: "indiv_12", name: "Individual Therapy - 12 Sessions", sessions: 12, price: 9600, discount: 20 },
];

const COUPLE_PACKAGES: PackageOption[] = [
  { id: "couple_single", name: "Single Session", sessions: 1, price: 1500 },
  { id: "couple_4", name: "Couple Therapy - 4 Sessions", sessions: 4, price: 5400, discount: 10 },
  { id: "couple_8", name: "Couple Therapy - 8 Sessions", sessions: 8, price: 10200, discount: 15 },
  { id: "couple_12", name: "Couple Therapy - 12 Sessions", sessions: 12, price: 14400, discount: 20 },
];

// Mock available time slots (replace with API call)
const fetchTimeSlots = async (_expertId: number, _date: Date): Promise<string[]> => {
  // Simulate API delay
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

  // Fetch slots when date changes
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
    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    const { serviceType, package: pkg, expertId, date, timeSlot, patient } = booking;
    if (!serviceType || !pkg || !date || !timeSlot) return;
    if (!patient.name || !patient.email || !patient.whatsapp || !patient.mode) return;

    setSubmitting(true);
    try {
      // Replace with actual API call: POST /api/bookings
      const payload = {
        expert_id: expertId,
        service_type: serviceType,
        package_id: pkg.id,
        sessions: pkg.sessions,
        total_price: pkg.price,
        appointment_date: format(date, "yyyy-MM-dd"),
        appointment_time: timeSlot,
        patient_name: patient.name,
        patient_email: patient.email,
        patient_whatsapp: patient.whatsapp,
        therapy_mode: patient.mode,
        referral_source: patient.referral,
      };
      console.log("Submitting booking:", payload);
      // await fetch("/api/bookings", { method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" } });
      alert("Booking submitted successfully! (Demo)");
      onClose();
      // Reset state after close
      setStep(1);
      setBooking({
        serviceType: null,
        package: null,
        expertId: expert.id,
        expertName: expert.name,
        date: null,
        timeSlot: null,
        patient: { name: "", email: "", whatsapp: "", mode: "", referral: "" },
      });
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Calendar helpers
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
        <button
          onClick={() => updateBooking("serviceType", "individual")}
          className={`p-4 border rounded-xl text-center transition ${
            booking.serviceType === "individual" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
          }`}
        >
          🧑 Individual Therapy
        </button>
        <button
          onClick={() => updateBooking("serviceType", "couple")}
          className={`p-4 border rounded-xl text-center transition ${
            booking.serviceType === "couple" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
          }`}
        >
          💑 Couple Therapy
        </button>
      </div>
    </div>
  );

  // Step 2: Package selection
  const renderStep2 = () => {
    const packages = booking.serviceType === "individual" ? INDIVIDUAL_PACKAGES : COUPLE_PACKAGES;
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Select Package</h3>
        <div className="space-y-3">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => updateBooking("package", pkg)}
              className={`w-full p-4 border rounded-xl text-left transition ${
                booking.package?.id === pkg.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{pkg.name}</div>
                  <div className="text-sm text-gray-500">{pkg.sessions} sessions</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">₹{pkg.price.toLocaleString()}</div>
                  {pkg.discount && <div className="text-xs text-green-600">Save {pkg.discount}%</div>}
                </div>
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
      {/* Calendar */}
      <div className="border rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => changeWeek("prev")} className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft size={20} />
          </button>
          <span className="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
          <button onClick={() => changeWeek("next")} className="p-1 rounded hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d} className="font-medium text-gray-500">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            const isToday = isSameDay(day, new Date());
            const isSelected = booking.date && isSameDay(day, booking.date);
            const isPast = day < new Date() && !isToday;
            return (
              <button
                key={i}
                disabled={isPast}
                onClick={() => updateBooking("date", day)}
                className={`p-2 rounded-full text-center text-sm transition ${
                  isSelected ? "bg-blue-500 text-white" : isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                } ${isToday && !isSelected ? "border border-blue-300" : ""}`}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>
      {/* Time slots */}
      {booking.date && (
        <div>
          <div className="font-medium mb-2 flex items-center gap-2">
            <Clock size={16} /> Available Slots for {format(booking.date, "MMM dd, yyyy")}
          </div>
          {loadingSlots ? (
            <div className="text-center py-4">Loading slots...</div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => updateBooking("timeSlot", slot)}
                  className={`p-2 border rounded-lg text-sm transition ${
                    booking.timeSlot === slot ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Step 4: Patient Information
  const renderStep4 = () => {
    const { patient } = booking;
    const updatePatient = (field: keyof typeof patient, value: string) => {
      setBooking((prev) => ({ ...prev, patient: { ...prev.patient, [field]: value } }));
    };
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-semibold">Your Information</h3>
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input
            type="text"
            value={patient.name}
            onChange={(e) => updatePatient("name", e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            value={patient.email}
            onChange={(e) => updatePatient("email", e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">WhatsApp Number *</label>
          <input
            type="tel"
            value={patient.whatsapp}
            onChange={(e) => updatePatient("whatsapp", e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter phone"
          />
          <p className="text-xs text-gray-500 mt-1">By entering your phone number you agree to receive messages via WhatsApp</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mode of Therapy *</label>
          <div className="flex gap-4">
            {["video", "audio", "chat"].map((mode) => (
              <label key={mode} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value={mode}
                  checked={patient.mode === mode}
                  onChange={(e) => updatePatient("mode", e.target.value as any)}
                />
                <span className="capitalize">{mode} Call</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">How did you find out about Oppam?</label>
          <select
            value={patient.referral}
            onChange={(e) => updatePatient("referral", e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend/Family</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  };

  // Step 5: Review & Submit (optional summary before final submit)
  // We'll skip extra step and directly submit after step 4, but the recruiter wants "add information of patient" then submit.
  // So after step 4, next becomes Submit.
  const isLastStep = step === 4;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Book Appointment with {expert.name}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {/* Step indicator */}
          <div className="flex mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex-1 text-center">
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm ${
                    step >= s ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                <div className="text-xs mt-1 text-gray-500">
                  {s === 1 && "Service"}
                  {s === 2 && "Package"}
                  {s === 3 && "DateTime"}
                  {s === 4 && "Details"}
                </div>
              </div>
            ))}
          </div>

          {/* Step content */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button onClick={handleBack} className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Back
              </button>
            )}
            {!isLastStep ? (
              <button
                onClick={handleNext}
                disabled={(step === 1 && !booking.serviceType) || (step === 2 && !booking.package) || (step === 3 && (!booking.date || !booking.timeSlot))}
                className="ml-auto px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting || !booking.patient.name || !booking.patient.email || !booking.patient.whatsapp || !booking.patient.mode}
                className="ml-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Booking"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}