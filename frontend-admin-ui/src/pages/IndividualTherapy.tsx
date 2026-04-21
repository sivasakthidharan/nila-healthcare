import { useState } from "react";
import {
  ChevronDown,
  Star,
  Calendar,
  Shield,
  EyeOff,
  Globe,
  Video,
  Award,
  Sparkles,
  MessageCircle,
  User,
  MapPin,
  ArrowRight,
  CheckCircle,
  Quote
} from "lucide-react";

import { useEffect } from "react";






export default function IndividualTherapy() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [therapists, setTherapists] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

const API_URL = import.meta.env.VITE_API_URL;

useEffect(() => {
  const fetchExperts = async () => {
    try {
      const res = await fetch(`${API_URL}/api/experts`);
      const data = await res.json();

      console.log("Experts from backend:", data);

      const formatted = data.map((e: any) => ({
        name: e.name,
        title: e.title,
        nextVisit: e.next_available
          ? new Date(e.next_available).toLocaleString("en-IN")
          : "Not available"
      }));

      setTherapists(formatted);

    } catch (err) {
      console.error("Error fetching experts:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchExperts();
}, []);


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Conditions data (organized in rows as shown)
  const conditionsRow1 = ["Anxiety & Stress", "Relationship Issues", "Queer Affirmative Therapy", "Parenting & Child Behavioral Issues"];
  const conditionsRow2 = ["Depression & Mood Disorders", "Premarital Assistance", "Addiction & Substance Abuse"];
  const conditionsRow3 = ["Trauma & PTSD", "Anger Management"];

  const features = [
    { icon: Calendar, title: "Seamless Online Booking" },
    { icon: Shield, title: "Zero Judgements" },
    { icon: EyeOff, title: "100% Privacy Assured" },
    { icon: Globe, title: "Consult from Anywhere, Anytime" },
    { icon: Video, title: "Turn On Camera Only if You Wish" },
    { icon: Award, title: "Certified & Experienced Psychologist" }
  ];

  const faqs = [
    {
      q: "How are online therapy sessions conducted, and what is the duration?",
      a: "We conduct online therapy sessions through three mediums: Google Meet video conferencing, audio calls (via Google Meet), or regular calls if there are network issues; and WhatsApp chat as a last resort. Each session typically lasts 50 minutes to 1 hour, while couple therapy sessions extend to 1.5 hours, ensuring ample time for meaningful discussions and progress."
    },
    {
      q: "Will I have the same therapist for follow-up sessions?",
      a: "Yes, we prioritize continuity of care. You will generally be matched with the same therapist for follow-up sessions to build a strong therapeutic relationship."
    },
    {
      q: "How does online therapy work, and what are its benefits?",
      a: "Online therapy works via secure video, audio, or chat platforms. Benefits include convenience, privacy, flexibility, and access to specialized therapists regardless of your location."
    },
    {
      q: "What if the therapist I chose didn't work for me?",
      a: "We understand that the therapeutic fit is crucial. You can request a different therapist at any time at no extra cost."
    },
    {
      q: "What is the validity of package sessions?",
      a: "Packages are typically valid for 6 months from the date of purchase, giving you flexibility to schedule sessions at your convenience."
    },
    {
      q: "What languages are available for online sessions?",
      a: "Sessions are available in English, Hindi, Tamil, Telugu, Malayalam, Kannada, and more. Please specify your preference during booking."
    },
    {
      q: "How do I know if the therapist is the right fit for me?",
      a: "We encourage an initial consultation session to assess compatibility. You can discuss your goals and see if their approach aligns with your needs."
    },
    {
      q: "Where do you offer online couple therapy in Malaysia?",
      a: "Our online couple therapy is available nationwide across Malaysia, from Kuala Lumpur to Penang, Johor Bahru, and all other states."
    }
  ];

  // Expanded testimonials data
  const testimonials = [
    {
      id: 1,
      content: "you've been more than just a psychologist to me; you've been a guiding light through some of my darkest days. Your empathy, patience, and understanding have made a world of difference in my life. I can't thank you enough for helping me find my way back to a happier and healthier me.",
      author: "Arjun"
    },
    {
      id: 2,
      content: "I never knew finding an online Malayali therapist could be so easy and comforting. The sessions with the Malayali psychologist were not only convenient but also deeply insightful. It's refreshing to connect with someone who understands your cultural nuances. Highly recommend their online counselling services to the Malayali community.",
      author: "Meenakshi"
    },
    {
      id: 3,
      content: "There are moments in life when you meet someone who makes a profound impact, and my psychologist is one of those people for me.",
      author: "Shreya"
    },
    {
      id: 4,
      content: "The search for a Malayali therapist who could provide online counselling seemed daunting until I found Oppam. The ease of access and the cultural empathy displayed by the Malayali psychologist have been invaluable to my mental health journey. If you're looking for understanding and professional online therapy, this is the place to go.",
      author: "Amal"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Struggles <br /> Into Personal Strength
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Personalized therapy sessions designed to nurture emotional well-being, build resilience, 
            and empower you to overcome challenges with lasting growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Let us Help you - Therapists Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Let us Help you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next visit: {therapist.nextVisit}</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 rounded-full p-2">
                    <User size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 hover:text-blue-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Know what you're Fighting with Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Know what you're Fighting with
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Finding the right treatment is a key step in your mental health journey. 
                Talk to one of our Mental Health experts to receive a personalized recommendation 
                for your concerns.
              </p>
              
              {/* Conditions in rows */}
              <div className="space-y-3 mb-8">
                <div className="flex flex-wrap gap-2">
                  {conditionsRow1.map((condition, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      {condition}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {conditionsRow2.map((condition, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      {condition}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {conditionsRow3.map((condition, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
                Get Therapy
              </button>
            </div>

            {/* Right Column - Chat Card */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="bg-white rounded-xl p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Not sure what kind of care you need?</p>
                    <p className="text-sm text-gray-500">Talk to one of Oppam's first responders to understand how we can help.</p>
                  </div>
                </div>
                <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Oppam Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why choose <span className="text-blue-600">Oppam</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hear out their Stories Section - Expanded with multiple testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear out their Stories
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real experiences from people who found their way back to themselves
          </p>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-3">The best decision they ever took was to</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
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
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Start Your Journey Today</h3>
          <p className="text-blue-200 mb-6">Take the first step towards a healthier mind.</p>
          <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Get Therapy
          </button>
        </div>
      </section>
    </div>
  );
}