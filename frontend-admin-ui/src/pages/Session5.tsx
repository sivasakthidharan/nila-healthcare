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
  CloudRain,
  Wind,
  Battery,
  Moon,
  Frown,
  AlertCircle
} from "lucide-react";

export default function GriefPage() {
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

  // Grief signs
  const griefSigns = [
    { icon: CloudRain, text: "A deep, persistent sorrow that can feel all-consuming." },
    { icon: Wind, text: "Difficulty connecting with emotions, leading to feelings of detachment." },
    { icon: AlertCircle, text: "Frustration or anger that may be directed at yourself, others, or even the situation." },
    { icon: Heart, text: "Lingering feelings about things left unsaid or undone." },
    { icon: Users, text: "A tendency to isolate from friends and loved ones, making it harder to find support." },
    { icon: Moon, text: "Manifestations of grief such as fatigue, change in appetite, or difficulty sleeping." }
  ];

  // How Oppam helps fight grief
  const helpItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Grief Counselor",
      description: "Help with all types of complex issues with a qualified grief counselor who understands the complexities of grief. They can help you process your feelings and identify ways to cope."
    },
    {
      icon: FileText,
      title: "Personalized Grief Plan",
      description: "Grief is unique to each individual. Our personalized grief plan includes activities to help you express your feelings and work through your grief."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "We offer ongoing support to help you navigate your grief journey. We provide resources and tools to help you manage your grief and move forward."
    }
  ];

  // How Oppam Works steps
  const steps = [
    {
      step: "01",
      title: "Choose Your Therapist",
      description: "Browse our list of qualified therapists. Review their specializations and find the one that best fits your needs."
    },
    {
      step: "02",
      title: "Choose Your Slot",
      description: "Select a time that fits your schedule. Flexible options ensure you can prioritize your mental well-being without disrupting your daily routine."
    },
    {
      step: "03",
      title: "Start Therapy",
      description: "Begin your sessions with a trusted therapist. Feel empowered as you embark on a personalized path toward healing."
    }
  ];

  // Why therapy matters items
  const whyTherapyMatters = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional counselors can help you navigate the complex emotions associated with grief. Their experience provides insight into your unique journey, offering strategies to cope with your loss and facilitate healing."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy offers a judgment-free environment where you can openly express your feelings about loss. This supportive setting encourages honest exploration of your emotions, helping you process grief at your own pace."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical techniques to manage grief, such as mindfulness, journaling, or self-care activities. These tools empower you to navigate daily life while honoring your feelings and memories."
    },
    {
      icon: TrendingUp,
      title: "Building Emotional Resilience",
      description: "Develop skills to strengthen your emotional resilience. Therapy can help you identify coping mechanisms and healthy outlets for your emotions, enabling you to face challenges with greater confidence."
    },
    {
      icon: HeartHandshake,
      title: "Improved Relationships",
      description: "Grief can impact your connections with others. Therapy helps you communicate your feelings and needs, fostering understanding and support from loved ones during this difficult time."
    },
    {
      icon: Flower2,
      title: "Long-Term Healing",
      description: "Grief therapy promotes lasting healing and growth. Committing to this process can lead to a more meaningful and fulfilling life, even after loss."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Surya Mohan", title: "Consultant Psychologist", nextSlot: "Today, 6:30 PM" },
//     { name: "Surya Gayathril", title: "Consultant Psychologist", nextSlot: "Today, 8:45 PM" },
//     { name: "Navaneeth Krishnan", title: "Consultant Psychologist", nextSlot: "Tomorrow, 12:00 AM" },
//     { name: "Gadha K Jayan", title: "Consultant Psychologist", nextSlot: "Tomorrow, 2:40 AM" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "There are moments in life when you meet someone who makes a profound impact, and my psychologist is one of those people for me.",
      author: "Neethu Raj"
    },
    {
      id: 2,
      content: "I didn't think I'd ever feel normal again after losing my father. But my therapist helped me understand that grieving takes time and that it's okay to not be okay all the time.",
      author: "Sindhu Paul"
    },
    {
      id: 3,
      content: "The grief was overwhelming at first. Through therapy, I learned to honor my loss while still moving forward with my life. I'm forever grateful for the support I received.",
      author: "Anand Krishnan"
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
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the right support for <span className="text-slate-600">navigating grief</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            With the right support, many individuals find comfort and healing in their grief journey. 
            You've taken the courageous first step toward processing your loss.
          </p>
          <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* This Is What Grief Can Look Like Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            This Is What <span className="text-slate-600">Grief Can Look Like</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
            {griefSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <sign.icon className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam helps You fight Grief Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-slate-600">Oppam</span> helps You fight Grief
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {helpItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <button className="text-slate-600 text-sm font-medium hover:text-slate-700">
                  Get Therapy →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-slate-600">Oppam</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {step.title === "Choose Your Slot" && (
                  <button className="mt-3 text-slate-600 text-sm font-medium hover:text-slate-700">
                    Choose Your Slot →
                  </button>
                )}
                {step.title === "Start Therapy" && (
                  <button className="mt-3 text-slate-600 text-sm font-medium hover:text-slate-700">
                    Get Therapy →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why therapy for Navigating Grief matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why therapy for <span className="text-slate-600">Navigating Grief matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyTherapyMatters.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Navigate Grief With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Navigate Grief With <span className="text-slate-600">Oppam</span>
            </h2>
            <p className="text-gray-600">We have got the best therapists for Grief Counseling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-slate-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next slot: {therapist.nextSlot}</span>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-full p-2">
                    <User size={20} className="text-slate-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-slate-700 hover:bg-slate-800 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-slate-600 font-semibold border-b-2 border-slate-600 pb-1 hover:text-slate-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear How They Faced Grief Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear How They <span className="text-slate-600">Faced Grief</span>
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
                  <Quote className="w-8 h-8 text-slate-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Let Go of Grief and Begin Healing with our Online Therapy Support</p>
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-100 to-gray-200 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-slate-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">You don't have to grieve alone</h3>
          <p className="text-slate-300 mb-6">Take the first step toward healing and finding peace after loss.</p>
          <button className="bg-white text-slate-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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