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
  AlertTriangle,
  Zap,
  Wind,
  Activity
} from "lucide-react";

export default function AngerManagementPage() {
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

  // Why Anger Management Matters items
  const whyAngerManagementMatters = [
    {
      icon: Activity,
      title: "Emotional Regulation",
      description: "Learning to manage anger helps you gain control over your emotions, allowing you to respond more thoughtfully rather than react impulsively."
    },
    {
      icon: HeartHandshake,
      title: "Improved Relationships",
      description: "Effective anger management fosters better communication and understanding, reducing conflicts and misunderstandings with loved ones."
    },
    {
      icon: Flower2,
      title: "Enhanced Quality of Life",
      description: "Managing anger can lead to a more peaceful and satisfying life, reducing feelings of frustration and regret."
    },
    {
      icon: Heart,
      title: "Physical Health Benefits",
      description: "Chronic anger can lead to health issues such as high blood pressure, heart disease, and stress-related disorders. Managing it can improve your overall health."
    },
    {
      icon: Wrench,
      title: "Better Coping Strategies",
      description: "Anger management teaches you practical tools to cope with stressors, enabling you to navigate challenges without resorting to aggression."
    }
  ];

  // How Oppam supports anger management
  const supportItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Therapist",
      description: "Start with a comprehensive assessment to understand your triggers and develop coping strategies."
    },
    {
      icon: FileText,
      title: "Personalised Treatment Plan",
      description: "Customize your treatment plan to address specific needs and goals."
    },
    {
      icon: Leaf,
      title: "Involving Therapeutic Activities",
      description: "Engage in activities that promote relaxation and stress relief."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Seek support from a therapist or counselor to maintain progress and address any challenges."
    }
  ];

  // How Oppam Works steps
  const steps = [
    {
      step: "01",
      title: "Choose Your Therapist",
      description: "Browse our list of qualified therapists. Review their specializations and find the best match for your specific needs and concerns."
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

  // Key Benefits of Anger Management
  const keyBenefits = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can help you identify patterns in your anger and develop healthier coping mechanisms."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy provides a judgment-free environment where you can express your feelings and explore the underlying issues behind your anger."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical strategies to manage anger in real-time, enabling you to respond calmly to challenging situations."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Develop skills to handle triggers and stressors, helping you prevent anger from escalating in the future."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in anger management leads to lasting changes that enhance your emotional health and overall quality of life."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Lera Benny Mattam", title: "Consultant Psychologist", nextSlot: "Today, 5:15 PM" },
//     { name: "Thejas Elsa George", title: "Consultant Psychologist", nextSlot: "Today, 5:30 PM" },
//     { name: "Thasleema Nujumudheen", title: "Consultant Psychologist", nextSlot: "Today, 5:45 PM" },
//     { name: "Josina Joseph", title: "Consultant Psychologist", nextSlot: "Today, 6:00 PM" },
//     { name: "Surya Mohan", title: "Consultant Psychologist", nextSlot: "Today, 8:30 PM" },
//     { name: "Surya Gayathri", title: "Consultant Psychologist", nextSlot: "Today, 8:45 PM" },
//     { name: "Navaneeth Krishnan", title: "Consultant Psychologist", nextSlot: "Tomorrow, 12:00 AM" },
//     { name: "Gedha K Jayan", title: "Consultant Psychologist", nextSlot: "Tomorrow, 2:40 AM" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "I was always frustrated and angry, and I didn't know why. Therapy helped me understand my triggers and taught me ways to express my emotions without blowing up.",
      author: "Mahesh K"
    },
    {
      id: 2,
      content: "Before therapy, I would lash out at the people closest to me. Now, I've learned how to calm myself and respond in a healthier way. It's still a work in progress, but it's getting better.",
      author: "Lekha Nair"
    },
    {
      id: 3,
      content: "I used to be so angry that I couldn't even talk to my friends. Now, I can talk to them about anything. Therapy has helped me express my feelings in a healthy way.",
      author: "Abhi"
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
      <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding the need for <span className="text-red-600">anger management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Uncontrolled anger strains relationships, affects decision-making, and can lead to regret, 
            but managing it brings emotional stability and healthier interactions.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Why Anger Management Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why <span className="text-red-600">Anger Management Matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyAngerManagementMatters.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Supports Anger Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-red-600">Oppam</span> Supports Anger Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {supportItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-red-600">Oppam</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits of Anger Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Key Benefits of <span className="text-red-600">Anger Management</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {keyBenefits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Control Anger With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Control Anger With <span className="text-red-600">Oppam</span>
            </h2>
            <p className="text-gray-600">We have skilled therapists ready to help you manage anger constructively.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-red-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next slot: {therapist.nextSlot}</span>
                    </div>
                  </div>
                  <div className="bg-red-100 rounded-full p-2">
                    <User size={20} className="text-red-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-1 hover:text-red-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear How They Mastered Anger Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear How They <span className="text-red-600">Mastered Anger</span>
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
                  <Quote className="w-8 h-8 text-red-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Break Free from Anger and Regain Control with our Online Therapy Support</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-red-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-12 h-12 text-red-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Take control of your anger today</h3>
          <p className="text-red-200 mb-6">Learn to respond calmly and build healthier relationships.</p>
          <button className="bg-white text-red-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Get Therapy
          </button>
        </div>
      </section>
    </div>
  );
}

// Missing imports
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