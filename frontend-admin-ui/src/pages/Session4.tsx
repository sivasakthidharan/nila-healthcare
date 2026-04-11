
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
  MessageSquare,
  AlertTriangle,
  Zap,
  Home
} from "lucide-react";

export default function RelationshipPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Relationship struggles signs
  const relationshipSigns = [
    { icon: MessageSquare, text: "Communication Breakdowns: Frequent misunderstandings or inability to express feelings." },
    { icon: Home, text: "Emotional Distance: Feeling disconnected or drifting apart from your partner." },
    { icon: Shield, text: "Trust Issues: Doubts and insecurities affecting your bond." },
    { icon: AlertTriangle, text: "Conflict Avoidance: Fear of confrontation leading to unresolved issues." },
    { icon: Zap, text: "Resentment: Holding onto past grievances that create tension." },
    { icon: AlertTriangle, text: "Increased Frustration: Small disagreements escalating into major arguments." }
  ];

  // How Oppam helps
  const helpItems = [
    {
      icon: MessageCircle,
      title: "Talk to a relationship counsellor",
      description: "Start with a consultation to understand your needs and goals."
    },
    {
      icon: FileText,
      title: "Personalised Action Plan",
      description: "Create a personalised action plan to address specific challenges."
    },
    {
      icon: MessageSquare,
      title: "Involving Communication Exercises",
      description: "Improve communication skills through exercises and role-playing."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Help maintain momentum by providing ongoing support and resources."
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
    },
    {
      step: "04",
      title: "Inquire About Oppam",
      description: "If you have questions about Oppam, contact us at info@oppam.com"
    }
  ];

  // Why therapy matters items
  const whyTherapyMatters = [
    {
      icon: Brain,
      title: "Expert Guidance",
      description: "Professional insights can help you navigate the complexities of your relationships. A skilled therapist offers strategies to address patterns and improve communication, guiding you toward healthier interactions."
    },
    {
      icon: Lock,
      title: "Safe Space to Share",
      description: "Therapy provides a judgment-free environment to express your feelings. This supportive setting encourages open dialogue, allowing both partners to explore emotions and thoughts without fear of criticism."
    },
    {
      icon: Wrench,
      title: "Tools for Effective Communication",
      description: "Learn practical techniques to enhance your conversations and resolve conflicts. These tools empower you to articulate your needs and listen actively, reducing misunderstandings and fostering connection."
    },
    {
      icon: Heart,
      title: "Building Emotional Intimacy",
      description: "Develop the skills to create a deeper emotional bond with your partner. Therapy can help you identify and express vulnerabilities, promoting trust and closeness."
    },
    {
      icon: TrendingUp,
      title: "Improved Conflict Resolution",
      description: "Gain strategies to manage disagreements constructively. Learning how to approach conflicts with empathy and understanding can transform tension into opportunities for growth."
    },
    {
      icon: Flower2,
      title: "Long-Term Relationship Health",
      description: "Investing in your relationship through therapy fosters a stronger, more resilient partnership. Committing to this process can lead to lasting improvements, enriching both your lives and enhancing overall well-being."
    }
  ];

  // Therapists data (first set from Strengthen Your Relationship section)
  const featuredTherapists = [
    { name: "Josita Joseph", title: "Consultant Psychologist", location: "New York", time: "Today, EEA (PA)" },
    { name: "Thelisa Esa George", title: "Consultant Psychologist", location: "New York", time: "Today, EEA (PA)" },
    { name: "Thaisema Njugunthaden", title: "Consultant Psychologist", location: "New York", time: "Today, EEA (PA)" },
    { name: "Surya Mohan", title: "Consultant Psychologist", location: "New York", time: "Today, EEA (PA)" }
  ];

  // More therapists from Hear out their Stories section
  const moreTherapists = [
    { name: "Surya Gayathri", title: "Consultant Psychologist", nextSlot: "Today, 8:45 PM" },
    { name: "G Swetha Nair", title: "Consultant Psychologist", nextSlot: "Tomorrow, 3:30 AM" },
    { name: "Mary Santra Tomy", title: "Consultant Psychologist", nextSlot: "Tomorrow, 3:45 AM" },
    { name: "Merin Susan", title: "Consultant Psychologist", nextSlot: "Tomorrow, 8:15 AM" }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      content: "Honestly, I wasn't sure anything could help us. But after a few sessions, I realized how much we both needed this. Now, we're both working on things together and it's making a difference.",
      author: "Vishnu Pillai"
    },
    {
      id: 2,
      content: "The communication exercises were a game-changer for us. We went from constant arguments to actually understanding each other. I'm so grateful we found Oppam.",
      author: "Meera Nair"
    },
    {
      id: 3,
      content: "I was hesitant to try relationship therapy, but our therapist made us feel so comfortable. We've learned to express our needs without fear and our bond has never been stronger.",
      author: "Arjun & Priya"
    }
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
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the right support for <span className="text-rose-600">building healthy relationship</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            With the right support, many individuals experience transformative shifts in their relationships. 
            You've taken the first step toward a healthier connection.
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* This is what Relationship Struggles can look like Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            This is what Relationship Struggles can <span className="text-rose-600">look like</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
            {relationshipSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <sign.icon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Oppam helps you build healthy relationships Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-rose-600">Oppam</span> helps you build healthy relationships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {helpItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <button className="text-rose-600 text-sm font-medium hover:text-rose-700">
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
            How <span className="text-rose-600">Oppam</span> Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-rose-600 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why therapy for Building Healthy Relationships matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why therapy for <span className="text-rose-600">Building Healthy Relationships matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {whyTherapyMatters.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Strengthen Your Relationship With Oppam - Featured Therapists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Strengthen Your Relationship With <span className="text-rose-600">Oppam</span>
            </h2>
            <p className="text-gray-600">Our skilled therapists offer guidance for building stronger, healthier connections.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTherapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-rose-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <MapPin size={14} />
                      <span>{therapist.location} | {therapist.time}</span>
                    </div>
                  </div>
                  <div className="bg-rose-100 rounded-full p-2">
                    <User size={20} className="text-rose-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hear out their Stories - More Therapists and Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hear out their Stories
          </h2>
          
          {/* More Therapists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {moreTherapists.map((therapist, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-rose-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>Next slot: {therapist.nextSlot}</span>
                    </div>
                  </div>
                  <div className="bg-rose-100 rounded-full p-2">
                    <User size={20} className="text-rose-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book now
                  </button>
                  <button className="text-gray-500 text-sm hover:text-gray-700">View Profile</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button className="text-rose-600 font-semibold border-b-2 border-rose-600 pb-1 hover:text-rose-800">
              View all Therapist
            </button>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                  <Quote className="w-8 h-8 text-rose-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Rebuild Your Relationship and Find Understanding with our Online Therapy.</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
              Get Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Not sure what kind of care you need? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-rose-600" />
              </div>
              <p className="font-semibold text-gray-800 text-lg">Not sure what kind of care you need?</p>
            </div>
            <p className="text-gray-600 mb-4">Talk to one of Oppam's first responders to understand how we can help.</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded-full transition-all flex items-center justify-center gap-2 mx-auto">
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
      <section className="bg-rose-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartHandshake className="w-12 h-12 text-rose-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Every relationship deserves care and attention</h3>
          <p className="text-rose-200 mb-6">Take the first step toward a healthier, happier connection today.</p>
          <button className="bg-white text-rose-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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