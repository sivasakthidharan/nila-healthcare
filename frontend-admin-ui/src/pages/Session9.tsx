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
  Home,
  Baby,
  GraduationCap,
  Smile
} from "lucide-react";

export default function ParentingPage() {
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

  // Why Addressing parenting and child behavioral issues Matters items
  const whyItMatters = [
    {
      icon: Home,
      title: "Improved Parent-Child Relationships",
      description: "Understanding and addressing behavioral issues can strengthen the bond between you and your child, fostering trust and communication."
    },
    {
      icon: Heart,
      title: "Enhanced Emotional Health",
      description: "Supporting your child's emotional and behavioral needs helps them develop resilience and coping skills, leading to better mental health outcomes."
    },
    {
      icon: Wrench,
      title: "Effective Discipline Strategies",
      description: "Learning appropriate techniques can lead to more effective discipline, reducing conflicts and frustration for both parents and children."
    },
    {
      icon: GraduationCap,
      title: "Better Academic Performance",
      description: "Addressing behavioral issues can enhance focus and engagement in school, positively impacting your child's learning experience."
    },
    {
      icon: Users,
      title: "Stronger Family Dynamics",
      description: "A supportive approach to behavior management can create a more harmonious home environment, benefiting all family members."
    }
  ];

  // How Oppam supports parenting and managing child behavioral issues
  const supportItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Therapist",
      description: "Learn how to manage challenging behaviors with our experienced therapist. Our team of experts will help you understand your child's behavior and find effective solutions."
    },
    {
      icon: FileText,
      title: "Personalized Treatment Plan",
      description: "We tailor treatment plans to meet your unique needs. Our therapists work closely with you to identify goals and track progress."
    },
    {
      icon: Baby,
      title: "Engaging Therapeutic Activities",
      description: "Our activities are designed to be fun and engaging. We use play therapy to help children learn important life skills."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "We provide ongoing support to help you navigate any challenges that arise. Our team is here to support you every step of the way."
    }
  ];

  // Key benefits of addressing parenting and child behavioral issues
  const keyBenefits = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional guidance can help you identify underlying issues and develop effective strategies tailored to your child's needs."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy provides a judgment-free environment where you can express your concerns and explore parenting challenges openly."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical strategies to manage behaviors, improve communication, and foster a nurturing environment for your child."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Develop skills to help your child handle challenges and emotions, promoting their growth and confidence."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in your child's emotional health leads to lasting changes that enhance their overall quality of life and family relationships."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Thalassa Njumuthean", title: "Consultant Psychologist", nextVisit: "Today, 7.5 MB" },
//     { name: "Thejas Eisa George", title: "Consultant Psychologist", nextVisit: "Today, 6.5 MB" },
//     { name: "Navaneeth Krishnan", title: "Consultant Psychologist", nextVisit: "Tomorrow, 12.0 MB" },
//     { name: "G Swetha Nair", title: "Consultant Psychologist", nextVisit: "Tomorrow, 3.2 MB" },
//     { name: "Gedda K. Jagan", title: "Consultant Psychologist", nextVisit: "Tomorrow, 9.5 MB" },
//     { name: "Martin Susan", title: "Consultant Psychologist", nextVisit: "Tomorrow, 8.5 MB" },
//     { name: "Leena Mary Mathew", title: "Consultant Psychologist", nextVisit: "Tomorrow, 7.5 MB" },
//     { name: "Paranza Niwasan", title: "Consultant Psychologist", nextVisit: "Tomorrow, 10.0 MB" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "I was at my wit's end, not knowing how to guide my daughter. These sessions have changed everything for us. Here's a glimpse of what we've been through so far. We're grateful for your support.",
      author: "Vijesh"
    },
    {
      id: 2,
      content: "The play therapy techniques our therapist taught us made such a difference. My son now expresses his feelings instead of acting out. Thank you, Oppam!",
      author: "Meera N."
    },
    {
      id: 3,
      content: "I never realized how my own stress was affecting my parenting. Therapy helped me become calmer and more present for my children. Our home is so much happier now.",
      author: "Rakesh P."
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
      <section className="relative bg-gradient-to-br from-green-50 via-white to-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding <span className="text-green-600">parenting and child behavioral issues</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Managing a child's behavioral challenges while balancing your own well-being can feel overwhelming without proper support.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Why Addressing parenting and child behavioral issues Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Addressing <span className="text-green-600">parenting and child behavioral issues Matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyItMatters.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* How Oppam Supports You Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-green-600">Oppam Supports You</span> in Parenting and Managing Child Behavioral Issues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {supportItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* How Oppam Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-green-600">Oppam</span> Works
          </h2>
          
          {/* Step 1 with criteria */}
          <div className="mt-10 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Choose Your Therapist</h3>
            </div>
            <p className="text-gray-600 mb-4 ml-16">Choose your therapist based on the following criteria:</p>
            <ul className="ml-16 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Experience:</strong> Experience in treating children and adolescents is preferred.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Credentials:</strong> Ensure that the therapist has a valid license to practice in your state or country.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700"><strong>Specialization:</strong> Look for therapists who specialize in treating children with specific issues such as anxiety, depression, or behavioral problems.</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Start Therapy</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Start therapy by scheduling an initial consultation. This allows you to discuss your concerns and goals for treatment. 
              The therapist will then develop a treatment plan tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits of addressing parenting and child behavioral issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Key benefits of addressing <span className="text-green-600">parenting and child behavioral issues</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {keyBenefits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Support Your Child With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Support Your Child With <span className="text-green-600">Oppam</span>
            </h2>
            <p className="text-gray-600">Our experts provide tools for positive parenting and understanding child behavior.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-green-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next visit: {therapist.nextVisit}</span>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-full p-2">
                    <User size={20} className="text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-green-600 font-semibold border-b-2 border-green-600 pb-1 hover:text-green-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear How Families Found Support Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear How Families <span className="text-green-600">Found Support</span>
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
                  <Quote className="w-8 h-8 text-green-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Strengthen Your Family and Find Harmony with our Online Therapy.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-green-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartHandshake className="w-12 h-12 text-green-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">You're not alone in this parenting journey</h3>
          <p className="text-green-200 mb-6">Take the first step toward a happier, more harmonious family life.</p>
          <button className="bg-white text-green-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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