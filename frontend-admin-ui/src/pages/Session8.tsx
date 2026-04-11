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
  Lock,
  Wrench,
  TrendingUp,
  HeartHandshake,
  Flower2,
  Briefcase,
  Battery,
  Zap,
  Coffee,
  AlertCircle
} from "lucide-react";

export default function WorkStressPage() {
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

  // Why Addressing Work Stress and Burnout Matters items
  const whyItMatters = [
    {
      icon: Brain,
      title: "Improved Mental Health",
      description: "Addressing work-related stress helps reduce anxiety, depression, and feelings of overwhelm, fostering a healthier mindset."
    },
    {
      icon: TrendingUp,
      title: "Enhanced Productivity",
      description: "Managing stress can improve focus and efficiency, leading to better performance and job satisfaction."
    },
    {
      icon: Coffee,
      title: "Better Work-Life Balance",
      description: "Recognizing and addressing burnout allows you to establish boundaries, ensuring you have time for rest and personal fulfillment."
    },
    {
      icon: Heart,
      title: "Physical Health Benefits",
      description: "Chronic stress can contribute to health issues like heart disease, headaches, and sleep disturbances. Managing it supports overall health."
    },
    {
      icon: Users,
      title: "Stronger Relationships",
      description: "Reducing work stress can enhance your interactions with colleagues and loved ones, fostering a more positive environment."
    }
  ];

  // How Oppam supports managing work stress and burnout
  const supportItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Therapist",
      description: "Seeking support? Our therapists are here to help. Reach out to one of our specialists today."
    },
    {
      icon: FileText,
      title: "Personalized Treatment Plan",
      description: "We understand that each individual is unique. Our personalized treatment plan is designed to address your specific needs and goals."
    },
    {
      icon: Leaf,
      title: "Engaging Therapeutic Activities",
      description: "Our activities are designed to be engaging and effective. We provide a variety of activities to help you stay motivated and focused."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Your journey to wellness is a continuous process. We offer ongoing support to help you stay on track and achieve your goals."
    }
  ];

  // Recognizing signs items
  const recognizingSigns = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can help you identify stressors and develop effective coping mechanisms tailored to your work environment."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical strategies for managing stress and preventing burnout, such as time management techniques and self-care practices."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in your mental health leads to lasting changes that enhance your overall quality of life and job satisfaction."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy provides a judgment-free space where you can discuss your feelings and experiences related to work stress."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Develop skills to handle work challenges and pressures, empowering you to maintain a healthier work-life balance."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Thalassa Niumuthen", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Surya Gayathri", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Thajaa Elsa George", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Nassareth Krishnan", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "G Swetha Nair", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Mary Santra Tony", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Cadia K Jayan", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" },
//     { name: "Martin Susan", title: "Consultant Psychologist", location: "New York", time: "Today, $2,000/M" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "I was constantly exhausted and felt like I couldn't keep up. Therapy helped me recognize the signs of burnout and gave me tools to set boundaries at work.",
      author: "Priya M."
    },
    {
      id: 2,
      content: "The stress was affecting my sleep and my relationships. My therapist helped me develop coping strategies that actually work. I feel like myself again.",
      author: "Rahul K."
    },
    {
      id: 3,
      content: "Learning to manage my work stress has transformed my life. I'm more productive and actually enjoy my job now. Thank you, Oppam!",
      author: "Neha S."
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-blue-600">work stress and burnout</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Constant pressure and exhaustion from work can lead to burnout, making it difficult to focus, maintain productivity, and enjoy life.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Why Addressing Work Stress and Burnout Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Addressing <span className="text-blue-600">Work Stress and Burnout Matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyItMatters.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Supports You Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-blue-600">Oppam</span> Supports You in Managing Work Stress and Burnout
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {supportItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* How Oppam Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-blue-600">Oppam Works</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Choose Your Therapist</h3>
              <p className="text-gray-600 text-sm">Select a time that fits your schedule. Flexible options ensure you can prioritize mental well-being without disrupting your routine.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Start Therapy</h3>
              <p className="text-gray-600 text-sm">Begin your sessions with a trusted therapist. Feel empowered as you embark on a personalized path toward mental wellness and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognizing signs of work stress and burnout Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Recognizing signs of <span className="text-blue-600">work stress and burnout</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {recognizingSigns.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Beat Work Stress With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Beat Work Stress With <span className="text-blue-600">Oppam</span>
            </h2>
            <p className="text-gray-600">We have the best therapists to help you manage burnout and find balance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <MapPin size={14} />
                      <span>{therapist.location} | {therapist.time}</span>
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
          <div className="text-center mt-6">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 hover:text-blue-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear How They Conquered Burnout Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear How They <span className="text-blue-600">Conquered Burnout</span>
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
                  <Quote className="w-8 h-8 text-blue-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Break free from burnout and reclaim your peace with our online therapy support</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Battery className="w-12 h-12 text-blue-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Reclaim your energy and find balance</h3>
          <p className="text-blue-200 mb-6">Take the first step toward a healthier work-life balance today.</p>
          <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Get Therapy
          </button>
        </div>
      </section>
    </div>
  );
}

// Missing imports
function MapPin(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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