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
  Rainbow,
  Music,
  Home
} from "lucide-react";

export default function QueerAffirmativePage() {
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

  // Why Queer Affirmative Support Matters items
  const whySupportMatters = [
    {
      icon: Rainbow,
      title: "Validation of Identity",
      description: "Affirmative support acknowledges and celebrates your identity, fostering self-acceptance and confidence in who you are."
    },
    {
      icon: Shield,
      title: "Coping with Discrimination",
      description: "Queer affirmative support provides tools and strategies to navigate and cope with societal discrimination, prejudice, or stigma."
    },
    {
      icon: Users,
      title: "Stronger Community Connections",
      description: "Finding supportive communities fosters connection, reducing loneliness and enhancing social support networks."
    },
    {
      icon: Heart,
      title: "Mental Health Benefits",
      description: "Access to supportive spaces reduces feelings of isolation and anxiety, leading to improved mental health outcomes for queer individuals."
    },
    {
      icon: TrendingUp,
      title: "Building Resilience",
      description: "Engaging with affirmative resources helps cultivate resilience, empowering you to face challenges with confidence."
    }
  ];

  // How Oppam supports queer affirmative concerns
  const supportItems = [
    {
      icon: MessageCircle,
      title: "Talk to a Therapist",
      description: "Talk with a therapist about how to overcome internalized homophobia. They can help you develop coping skills and build resilience."
    },
    {
      icon: FileText,
      title: "Personalized Treatment Plan",
      description: "Consultant-led treatment plans are tailored to your specific needs. This includes therapy, medication, and lifestyle changes."
    },
    {
      icon: Music,
      title: "Singing Therapeutic Activities",
      description: "Singing therapeutic activities like singing along to music or joining a choir can be incredibly healing. It allows you to express yourself creatively and connect with others."
    },
    {
      icon: HeartHandshake,
      title: "Cording Support",
      description: "Support from LGBTQ+ friends and family is invaluable. Sharing your journey and receiving support can make all the difference."
    }
  ];

  // Key Benefits of Queer Affirmative Support
  const keyBenefits = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can help you navigate the complexities of identity, providing strategies to address specific challenges you may face."
    },
    {
      icon: Wrench,
      title: "Tools for Coping",
      description: "Learn practical strategies to manage stress, build resilience, and navigate challenges within your personal and social environments."
    },
    {
      icon: Flower2,
      title: "Long-Term Well-Being",
      description: "Investing in your mental health and identity affirmation leads to lasting changes that enhance your overall quality of life."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy offers a judgment-free environment where you can express yourself, experience, and connect related to your identity."
    },
    {
      icon: Users,
      title: "Building Community",
      description: "Engage with others who share similar experiences, fostering a sense of belonging and support."
    }
  ];

  // Therapists data
//   const therapists = [
//     { name: "Thaliesma Nujumudheen", title: "Consultant Psychologist", location: "New York", time: "Today, 7:42 PM" },
//     { name: "Surya Gayathri", title: "Consultant Psychologist", location: "New York", time: "Today, 8:45 PM" },
//     { name: "Thijas Esa George", title: "Consultant Psychologist", location: "New York", time: "Today, 8:45 PM" },
//     { name: "G Sivethia Nair", title: "Consultant Psychologist", location: "New York", time: "Today, 8:22 PM" },
//     { name: "Mary Satria Tony", title: "Consultant Psychologist", location: "New York", time: "Today, 8:45 AM" },
//     { name: "Merin Susan", title: "Consultant Psychologist", location: "New York", time: "Today, 8:15 AM" },
//     { name: "Leena Mary Mathew", title: "Consultant Psychologist", location: "New York", time: "Today, 7:15 AM" },
//     { name: "Parama Nilavan", title: "Consultant Psychologist", location: "New York", time: "Today, 12:00 PM" }
//   ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "Finding a queer-affirmative therapist changed my life. For the first time, I felt truly seen and understood. I've learned to embrace who I am without shame.",
      author: "Alex M."
    },
    {
      id: 2,
      content: "The safe space provided by my therapist allowed me to explore my identity freely. I'm now more confident and connected to my community.",
      author: "Jordan K."
    },
    {
      id: 3,
      content: "I was struggling with internalized fears for years. Therapy helped me unpack those feelings and find pride in my authentic self.",
      author: "Casey L."
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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Rainbow className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding the need for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">queer affirmative Support</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Hanging societal judgment and identity struggles can affect mental health, self-esteem, and authentic relationships.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Why Queer Affirmative Support Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why <span className="text-purple-600">Queer Affirmative Support Matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whySupportMatters.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam Supports Queer Affirmative Concerns Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-purple-600">Oppam</span> Supports Queer Affirmative Concerns
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {supportItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-purple-600" />
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
            How <span className="text-purple-600">Oppam</span> Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Choose Your Therapist</h3>
              <p className="text-gray-600 text-sm">Start therapy with a trusted therapist. Feel empowered as you embark on a personalized path toward mental wellness and growth.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Start Therapy</h3>
              <p className="text-gray-600 text-sm">Begin your sessions with a trusted therapist. Feel empowered as you embark on a personalized path toward mental wellness and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits of Queer Affirmative Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Key Benefits of <span className="text-purple-600">Queer Affirmative Support</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {keyBenefits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Affirm Your True Self With Oppam - Therapists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <Rainbow className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Affirm Your True Self With <span className="text-purple-600">Oppam</span>
            </h2>
            <p className="text-gray-600">Our therapists provide inclusive, queer-affirmative care with understanding and respect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-purple-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <MapPin size={14} />
                      <span>{therapist.location} | {therapist.time}</span>
                    </div>
                  </div>
                  <div className="bg-purple-100 rounded-full p-2">
                    <User size={20} className="text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1 hover:text-purple-800">
              View all Therapist
            </button>
          </div>
        </div>
      </section>

      {/* Hear Their Stories Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear Their <span className="text-purple-600">Stories</span>
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
                  <Quote className="w-8 h-8 text-purple-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Celebrate Who You Are with Inclusive Therapy Support</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rainbow className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">You deserve to be seen, heard, and celebrated</h3>
          <p className="text-purple-200 mb-6">Take the first step toward embracing your authentic self.</p>
          <button className="bg-white text-purple-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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