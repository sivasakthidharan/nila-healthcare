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
  ArrowRight,
  Heart,
  Brain,
  Users,
  Leaf,
  Clock,
  CheckCircle,
  Quote
} from "lucide-react";

export default function AnxietyStressPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Signs of anxiety and stress
  const signsColumn1 = [
    "Constant worry or racing thoughts",
    "Physical symptoms like rapid heartbeat or sweating",
    "Avoidance of certain situations or places"
  ];
  const signsColumn2 = [
    "Restlessness or feeling on edge",
    "Difficulty concentrating or feeling easily distracted",
    "Sleep disturbances or fatigue"
  ];

  // How Oppam helps
  const helpItems = [
    {
      icon: MessageCircle,
      title: "Talk to a therapist",
      description: "Start with a complimentary consultation with Oppam's trained therapists via online video calls."
    },
    {
      icon: FileText,
      title: "Personalized Treatment Plan",
      description: "Comprehensive treatment plans tailored to your needs, including therapy, medication, and lifestyle changes."
    },
    {
      icon: Leaf,
      title: "Ingesting Therapeutic Activities",
      description: "Enjoy diverse activities like yoga, meditation, and mindfulness practices to manage stress effectively."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Join a supportive group that shares experiences and provides encouragement."
    }
  ];

  // How Oppam Works steps
  const steps = [
    {
      step: "01",
      title: "Choose Your Therapist",
      description: "Browse our list of qualified therapists. Review their specialties and find the best match for your specific needs and concerns."
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

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sangeetha Kannan",
      content: "My anxiety made me overthink every decision, big or small. Therapy taught me how to manage that and focus on the present instead of worrying about 'what ifs' all the time. Now, I'm finally moving forward in life.",
      author: "Manoj C"
    },
    {
      id: 2,
      name: "Rahul",
      content: "I was losing sleep because of constant anxiety and stress. My mind just wouldn't relax. Through online counselling in Kerala, I've learned practical ways to calm my thoughts and manage anxiety better. Therapy really helped me regain control of my daily life.",
      author: "Rahul"
    },
    {
      id: 3,
      name: "Lekshmi Narayanaswamy",
      content: "Anxiety used to hold me back from doing even simple things. I didn't know how to deal with the constant worry. With the help of my therapist, I slowly started understanding my triggers and learning healthier ways to cope.",
      author: "Lekshmi Narayanaswamy"
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
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talk to an Online Therapist for <span className="text-teal-600">Anxiety & Stress</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose a time that works for you. Flexible sessions help you prioritize your mental well-being without interrupting your routine.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Common Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Common Signs of <span className="text-teal-600">Anxiety and Stress</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="space-y-3">
              {signsColumn1.map((sign, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {signsColumn2.map((sign, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Oppam helps fight anxiety Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How <span className="text-teal-600">Oppam</span> helps fight anxiety
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {helpItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-teal-600" />
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
            How <span className="text-teal-600">Oppam</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="text-5xl font-bold text-teal-200 mb-4">{step.step}</div>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-teal-300 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hear How They Overcame Anxiety Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Hear How They Overcame Anxiety
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
                  <Quote className="w-8 h-8 text-teal-300 opacity-50" />
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-8 rounded-full transition-all">
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
      <section className="bg-teal-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">You don't have to face anxiety alone</h3>
          <p className="text-teal-200 mb-6">Take the first step toward a calmer, more peaceful mind.</p>
          <button className="bg-white text-teal-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
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