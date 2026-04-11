import { useState, useEffect } from "react";
import {
  ChevronDown,
  Star,
  Calendar,
  Shield,
  EyeOff,
  Globe,
  Video,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  User,
  Clock,
  Stethoscope,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export default function SexualHealth() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [therapists, setTherapists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(`${API_URL}/experts`);  // match backend endpoint
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Ensure data is an array
        if (!Array.isArray(data)) throw new Error("Invalid response format");
        
        const formatted = data.map((e: any) => ({
          name: e.name,
          title: e.title,
            hours: e.experience ? `${e.experience}+ hours` : "N/A",
 time: e.next_available
    ? new Date(e.next_available).toLocaleString("en-IN")
    : "Not available",
  specialty: e.specialization || "General Therapy",
  badge: "Available for Consultation"
        //   nextVisit: e.next_available
        //     ? new Date(e.next_available).toLocaleString("en-IN")
        //     : "Not available"
        }));
        setTherapists(formatted);
      } catch (err) {
        console.error("Error fetching experts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, [API_URL]);


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Concerns data
  const primaryConcerns = [
    "Performance anxiety issues",
    "Low desire or mismatched libido",
    "Relationship intimacy concerns",
    "Healing trauma & past experiences",
    "Body image & self-esteem blocks",
    "Gender dysphoria concerns",
    "Postpartum intimacy concerns",
    "Queer affirmative counseling"
  ];

  const moreWays = [
    "Postpartum intimacy issues",
    "Mismatched libido",
    "Gender dysphoria concerns",
    "Self-esteem blocks",
    "Performance anxiety",
    "Body image",
    "Sexual health for non-binary",
    "Hormonal influences",
    "Queer identity",
    "Sex change",
    "Past-dating intimacy",
    "Trauma",
    "Relationship intimacy"
  ];

//   const professionals = [
//     {
//       name: "Dr. Pathimath Shammera",
//       title: "Neurology & Stroke Consultant",
//       hours: "250+ therapy hours",
//       time: "Starts at 8:00 pm every session",
//       specialty: "Specialist, epilepsy, neuropsychiatry",
//       badge: "Excellence! Made Video visits"
//     },
//     {
//       name: "Shakhiya S Priyamvada",
//       title: "Psychiatrist Therapist",
//       hours: "50% therapy hours",
//       time: "Starts at 2:00 pm every session",
//       specialty: "Specialist, epilepsy, neuropsychiatry",
//       badge: "Excellence! Made Video visits"
//     }
//   ];

  const didYouKnowFacts = [
    "Stress, hormones, medications, and post-experience changes have subtle and multifaceted effects.",
    "Nearly 1 in 3 women experience mood swings such as panic, low clarity, or difficulty in intimacy at some point in life.",
    "Around 40% of men report issues like erectile dysfunction, performance anxiety, or performance anxiety."
  ];

  const faqs = [
    {
      q: "Is sexual wellness therapy confidential?",
      a: "Yes, 100%. Every conversation and session is completely private and confidential. Your privacy is our top priority."
    },
    {
      q: "Do I need to come with my partner?",
      a: "Not necessarily. You can attend sessions individually or as a couple. We tailor the approach based on your specific needs and comfort level."
    },
    {
      q: "I feel ashamed to talk about these issues. How will you help me?",
      a: "We create a safe, judgment-free space where you can open up at your own pace. Our therapists are trained to handle sensitive topics with empathy and discretion. You're never pressured to share more than you're comfortable with."
    },
    {
      q: "What if my concern is more medical than psychological?",
      a: "Our multidisciplinary team includes medical professionals who can assess and address both psychological and physiological aspects. We also collaborate with specialists when needed."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Intimacy & Sexual Wellness
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sexual wellness is more than just physical health. It's about healing comfort, connection, 
                and contribution in your own body and relationships. Yet, many people silently struggle 
                with intimacy concerns, thinking they are alone.
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
                Book consultation
              </button>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 shadow-lg">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Not sure what you need?</p>
                    <p className="text-sm text-gray-500">Take our 45 seconds self-assessment</p>
                  </div>
                </div>
                <button className="bg-rose-100 hover:bg-rose-200 text-rose-700 w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  Take Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns We Can Help With */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Concerns We Can Help With
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We support individuals and couples through a wide range of sexual wellness challenges, including:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {primaryConcerns.map((concern, idx) => (
            <span
              key={idx}
              className="bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {concern}
            </span>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full transition-all">
            Book consultation
          </button>
        </div>
      </section>

      {/* More Ways We Can Help */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Ways We Can Help
            </h2>
            <p className="text-gray-600 text-lg">
              Your care is in the hands of a multidisciplinary team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Tags */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-8">
                {moreWays.map((way, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-rose-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
                  >
                    {way}
                  </span>
                ))}
              </div>
              <button className="text-rose-600 font-semibold border-b-2 border-rose-600 pb-1 hover:text-rose-800">
                More Ways We Can Help →
              </button>
            </div>

            {/* Right Column - Did You Know */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-500" />
                Did You Know?
              </h3>
              <ul className="space-y-4">
                {didYouKnowFacts.map((fact, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Meet Our Specialists
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {therapists.map((pro, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{pro.name}</h3>
                  <p className="text-rose-600 text-sm font-medium">{pro.title}</p>
                  <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <TrendingUp size={14} /> {pro.hours}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {pro.time}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{pro.specialty}</p>
                  <div className="mt-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {pro.badge}
                  </div>
                </div>
                <div className="bg-rose-100 rounded-full p-2">
                  <User size={20} className="text-rose-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-3">
                <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                  Book →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Our Clients Say - Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "I finally feel comfortable in my own skin. The therapy sessions helped me understand myself better."
              </p>
              <p className="font-semibold mt-3">— Client A</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "My partner and I have never communicated better. Thank you for guiding us through this journey."
              </p>
              <p className="font-semibold mt-3">— Client B</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Safe, judgment-free space. I could finally open up about things I've never told anyone."
              </p>
              <p className="font-semibold mt-3">— Client C</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Any Questions?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-rose-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-rose-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            You're not alone. We're here to help.
          </h3>
          <p className="text-rose-200 mb-6">
            Take the first step toward a healthier, more fulfilling intimate life.
          </p>
          <button className="bg-white text-rose-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Book a Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
}