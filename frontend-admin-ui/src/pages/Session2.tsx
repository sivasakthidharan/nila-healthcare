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
  Sparkles,
  MessageCircle,
  User,
  ArrowRight,
  Heart,
  Brain,
  Users,
  Leaf,
  Clock,
  CheckCircle,
  Quote,
  BookOpen,
  Lock,
  Wrench,
  TrendingUp,
  HeartHandshake,
  Flower2
} from "lucide-react";

export default function DepressionPage() {
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
  }, [API_URL]);


  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Depression signs
  const depressionSigns = [
    "Persistent sadness or low mood",
    "Loss of interest in activities",
    "Changes in sleep patterns",
    "Difficulty concentrating or making decisions",
    "Fatigue or low energy",
    "Feelings of worthlessness or guilt"
  ];

  // How Oppam helps fight depression
  const helpItems = [
    {
      icon: MessageCircle,
      title: "Talk to a therapist",
      description: "Start with a complimentary consultation with a qualified therapist to understand your unique challenges."
    },
    {
      icon: FileText,
      title: "Personalised Treatment Plan",
      description: "Collaborate with your therapist to create a plan that addresses your specific needs."
    },
    {
      icon: Leaf,
      title: "Ingesting Therapeutic Activities",
      description: "Explore diverse therapeutic activities and techniques to support your mental health journey."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Join a supportive group that fosters connection and shared experiences."
    }
  ];

  // How Oppam Works steps
  const steps = [
    {
      step: "01",
      title: "Choose Your Therapist",
      description: "Choose our list of qualified therapists. Review their specializations and find the best match for your specific needs and concerns.",
      criteria: [
        "Trust: Choose a therapist you trust and feel comfortable with.",
        "Experience: Select a therapist who has experience in treating depression disorders.",
        "Credentials: Ensure the therapist is licensed and certified by a reputable organization."
      ]
    },
    {
      step: "02",
      title: "Choose Your Slot",
      description: "Select a time that fits your schedule. Flexible options ensure you can prioritize your mental well-being without disrupting your routine."
    },
    {
      step: "03",
      title: "Start Therapy",
      description: "Begin your sessions with a trusted therapist. Feel empowered as you embark on a personalized path toward mental wellness and growth."
    }
  ];

  // Why therapy matters items
  const whyTherapyMatters = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can illuminate paths to healing, helping you navigate challenges and build resilience. Therapists bring knowledge and experience, helping you navigate complex emotions with clarity and understanding."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Talk openly about your feelings in a judgment-free zone. This supportive environment encourages honesty, allowing you to explore your thoughts and emotions freely."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical strategies to manage symptoms and navigate daily life. These coping mechanisms can empower you to handle challenges more effectively and reduce feelings of overwhelm."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Develop skills to handle challenges and prevent future episodes. Strengthening your mental resilience helps you face difficulties with greater confidence and ease."
    },
    {
      icon: HeartHandshake,
      title: "Improved Relationships",
      description: "Enhance your connections with loved ones through better communication. Therapy equips you with the tools to express yourself and understand others, fostering deeper bonds."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in your mental health fosters a happier, more fulfilling life. Committing to therapy can lead to lasting changes that enhance your overall quality of life."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Joach", title: "Consultant Psychologist", nextVisit: "Today, 2:25 PM" },
//     { name: "Surya Mohan", title: "Consultant Psychologist", nextVisit: "Today, 2:25 PM" },
//     { name: "Lera Denny Matlian", title: "Consultant Psychologist", nextVisit: "Today, 2:25 PM" },
//     { name: "Ana Maria", title: "Consultant Psychologist", nextVisit: "Today, 2:25 PM" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "I never thought I could feel like myself again. The therapy sessions helped me understand my depression and gave me practical tools to cope. I'm grateful for the support I received.",
      author: "Priya S."
    },
    {
      id: 2,
      content: "The therapist listened to me without judgment. For the first time in years, I felt heard. The personalized treatment plan made all the difference in my recovery journey.",
      author: "Vikram M."
    },
    {
      id: 3,
      content: "Online therapy made it so convenient to get help. I was able to open up from the comfort of my home. Now I have strategies to manage my mood and live a fuller life.",
      author: "Anjali N."
    }
  ];

  const faqs = [
    {
      q: "How are online therapy sessions conducted, and what is the duration?",
      a: "We conduct online therapy sessions through three mediums: Google Meet video conferencing, audio calls (via Google Meet), or regular calls if there are network issues; and WhatsApp chat as a last resort. Each session typically lasts 50 minutes to 1 hour, ensuring ample time for meaningful discussions and progress."
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
      q: "What languages are available for online sessions?",
      a: "Sessions are available in English, Hindi, Tamil, Telugu, Malayalam, Kannada, and more. Please specify your preference during booking."
    },
    {
      q: "How do I know if the therapist is the right fit for me?",
      a: "We encourage an initial consultation session to assess compatibility. You can discuss your goals and see if their approach aligns with your needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the right treatment for <span className="text-indigo-600">depression</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            7 out of 10 people recover completely. You've learned the first step—now let's get you the help you need.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* This is what depression can look like Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            This is what depression can <span className="text-indigo-600">look like</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto">
            {depressionSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam helps fight depression Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-indigo-600">Oppam</span> helps fight depression
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {helpItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Works Section with Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-indigo-600">Oppam</span> Works
          </h2>
          
          {/* Step 1 with criteria */}
          <div className="mt-10 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Therapist</h3>
            </div>
            <p className="text-gray-600 mb-4 ml-16">Choose your therapist based on the following criteria:</p>
            <ul className="ml-16 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Trust:</strong> Choose a therapist you trust and feel comfortable with.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Experience:</strong> Select a therapist who has experience in treating depression disorders.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Credentials:</strong> Ensure the therapist is licensed and certified by a reputable organization.</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Slot</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Select a time that fits your schedule. Flexible options ensure you can prioritize your mental well-being without disrupting your routine.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Start Therapy</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Begin your sessions with a trusted therapist. Feel empowered as you embark on a personalized path toward mental wellness and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why therapy for depression matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why therapy for depression <span className="text-indigo-600">matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyTherapyMatters.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Overcome depression with Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Overcome depression <br /> with <span className="text-indigo-600">Oppam</span>
            </h2>
            <p className="text-gray-600">We have got the best therapists for depression.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-indigo-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next visit: {therapist.nextVisit}</span>
                    </div>
                  </div>
                  <div className="bg-indigo-100 rounded-full p-2">
                    <User size={20} className="text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1 hover:text-indigo-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear how they beat depression Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear how they <span className="text-indigo-600">beat depression</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Break free from depression and reclaim your peace with our online therapy support.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Call to see if Oppam fits your needs or understand how we can help.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
              <MessageCircle className="w-4 h-4" />
              Chat Now
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
      <section className="bg-indigo-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">You deserve to feel better</h3>
          <p className="text-indigo-200 mb-6">Take the first step toward healing today.</p>
          <button className="bg-white text-indigo-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Get Therapy
          </button>
        </div>
      </section>
    </div>
  );
}

// Missing import for FileText
function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}