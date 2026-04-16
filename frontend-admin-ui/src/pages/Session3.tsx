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
  Flower2,
  AlertTriangle,
  Moon,
  Zap,
  Eye
} from "lucide-react";

export default function TraumaPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [therapists, setTherapists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/experts`);  // match backend endpoint
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

  // Trauma and PTSD signs
  const traumaSigns = [
    { icon: AlertTriangle, text: "Intrusive memories or flashbacks" },
    { icon: Moon, text: "Emotional numbness or detachment" },
    { icon: Zap, text: "Heightened startle response or hypervigilance" },
    { icon: Moon, text: "Difficulty sleeping or experiencing nightmares" },
    { icon: Eye, text: "Avoidance of reminders or triggers" },
    { icon: AlertTriangle, text: "Irritability or outbursts of anger" }
  ];

  // How Oppam helps fight trauma
  const helpItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Therapist",
      description: "Begin with a comprehensive assessment and personalized treatment plan."
    },
    {
      icon: FileText,
      title: "Personalised Treatment Plan",
      description: "Tailored therapy plans based on your unique needs and goals."
    },
    {
      icon: Leaf,
      title: "Ingesting Therapeutic Activities",
      description: "Engage in activities that promote emotional regulation, such as mindfulness exercises or creative outlets."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Receive ongoing support from our team to help you navigate life's challenges."
    }
  ];

  // How Oppam Works steps
  const steps = [
    {
      step: "01",
      title: "Choose Your Therapist",
      description: "Begin by selecting a therapist who aligns with your needs and preferences.",
      criteria: [
        "Bias-free: No judgment or bias in treatment.",
        "Personalized care: Tailored to your specific needs and goals.",
        "Trustworthy: A team of professionals with experience in treating mental health issues."
      ]
    },
    {
      step: "02",
      title: "Choose Your Slot",
      description: "Select a time slot that fits your schedule and availability."
    },
    {
      step: "03",
      title: "Start Therapy",
      description: "Begin your sessions with a free trial period to experience Oppam firsthand."
    },
    {
      step: "04",
      title: "Inquire About Our Services",
      description: "For more information about our services, contact us at info@oppam.com"
    },
    {
      step: "05",
      title: "Book Your Session",
      description: "Schedule your appointment today and take the first step towards healing."
    }
  ];

  // Why therapy matters items
  const whyTherapyMatters = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can help you navigate the complexities of trauma with clarity and compassion."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Engage openly about your experiences in a judgment-free environment, allowing for honest exploration of your thoughts and feelings."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Acquire practical strategies to manage symptoms and navigate daily challenges, empowering you to confront difficulties with greater ease."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Develop skills to handle life's challenges and prevent future episodes. Strengthening your mental resilience enables you to face adversities with confidence."
    },
    {
      icon: HeartHandshake,
      title: "Improved Relationships",
      description: "Enhance your connections with loved ones through effective communication. Therapy equips you with tools to express your feelings and better understand others."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in your mental health can lead to a more fulfilling and happier life. Committing to therapy fosters lasting changes that improve your overall quality of life."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Dr. Meera Krishnamoorthy", title: "Trauma Specialist", nextVisit: "Today, 3:00 PM", experience: "12+ years" },
//     { name: "Anand Raj", title: "Clinical Psychologist", nextVisit: "Today, 4:30 PM", experience: "8+ years" },
//     { name: "Dr. Priya Sharma", title: "PTSD Specialist", nextVisit: "Tomorrow, 10:00 AM", experience: "15+ years" },
//     { name: "Vikram Menon", title: "Trauma Therapist", nextVisit: "Tomorrow, 2:00 PM", experience: "6+ years" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "I used to feel so trapped, like I couldn't escape my memories. But therapy allowed me to take back control. I'm still on the journey, but now I know I can heal.",
      author: "Sandeep Shankar"
    },
    {
      id: 2,
      content: "The trauma affected every part of my life. But therapy gave me the tools to slowly rebuild myself. It's still tough, but I'm handling it a lot better than before.",
      author: "Rekha Ponnachan"
    },
    {
      id: 3,
      content: "Finding a therapist who understood trauma was life-changing. The compassionate care I received helped me process things I'd buried for years. I'm finally free.",
      author: "Amita Nair"
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
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the right treatment for <span className="text-amber-600">trauma and PTSD</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Many individuals have navigated this journey and found peace. You've taken the first step—now let's explore the support that can guide you towards healing.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* This Is What Trauma and PTSD look like Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            This Is What Trauma and <span className="text-amber-600">PTSD look like</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto">
            {traumaSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <sign.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam helps You fight Trauma & PTSD Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-amber-600">Oppam</span> helps You fight Trauma & PTSD
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {helpItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-amber-600" />
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
            How <span className="text-amber-600">Oppam</span> Works
          </h2>
          
          {/* Step 1 with criteria */}
          <div className="mt-10 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Therapist</h3>
            </div>
            <p className="text-gray-600 mb-4 ml-16">Choose your therapist based on the following criteria:</p>
            <ul className="ml-16 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Bias-free:</strong> No judgment or bias in treatment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Personalized care:</strong> Tailored to your specific needs and goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Trustworthy:</strong> A team of professionals with experience in treating mental health issues.</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Slot</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Select a time slot that fits your schedule and availability.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Start Therapy</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Begin your sessions with a free trial period to experience Oppam firsthand.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Inquire About Our Services</h3>
            </div>
            <p className="text-gray-600 ml-16">
              For more information about our services, contact us at <a href="mailto:info@oppam.com" className="text-amber-600 hover:underline">info@oppam.com</a>
            </p>
          </div>

          {/* Step 5 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Book Your Session</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Schedule your appointment today and take the first step towards healing.
            </p>
          </div>
        </div>
      </section>

      {/* Why therapy for Trauma and PTSD matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why therapy for <span className="text-amber-600">Trauma and PTSD matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyTherapyMatters.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Heal from Trauma & PTSD With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Heal from <span className="text-amber-600">Trauma & PTSD</span> With Oppam
            </h2>
            <p className="text-gray-600">Your dedicated therapist specializes in trauma recovery and compassionate support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-amber-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next: {therapist.nextVisit}</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{therapist.experience} experience</div>
                  </div>
                  <div className="bg-amber-100 rounded-full p-2">
                    <User size={20} className="text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-amber-600 font-semibold border-b-2 border-amber-600 pb-1 hover:text-amber-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear How They Healed Trauma Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear How They <span className="text-amber-600">Healed Trauma</span>
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
                  <Quote className="w-8 h-8 text-amber-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Let Go of Trauma and Begin Healing with our Online Therapy Support</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-amber-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-amber-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Healing is possible. You don't have to do it alone.</h3>
          <p className="text-amber-200 mb-6">Take the first step toward reclaiming your peace today.</p>
          <button className="bg-white text-amber-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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