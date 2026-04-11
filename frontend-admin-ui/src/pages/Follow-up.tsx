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
  Lock,
  Wrench,
  TrendingUp,
  HeartHandshake,
  Flower2,
  Search,
  MapPin,
  Briefcase,
  Trophy,
  Flag,
  UserCheck,
  ArrowRight
} from "lucide-react";

export default function FollowUpPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Stats data
  const stats = [
    { value: "25K", label: "Hours completed", icon: Clock },
    { value: "40+", label: "Countries", icon: Globe },
    { value: "45+", label: "Therapists", icon: Users }
  ];

  // Service categories
  const categories = [
    "Consultant Psychologist",
    "Sexual Health",
    "Clinical Psychologist",
    "Psychiatrist"
  ];

  // Therapists data
  const therapists = [
    {
      name: "Shakhiya S Priyamvada",
      title: "Psychosexual Therapist",
      hours: "1500+",
      specialties: ["national difficulties", "self-esteem issues"],
      price: "1/01",
      rating: 4.8
    },
    {
      name: "Merin Susan",
      title: "Consultant Psychologist",
      hours: "4500+",
      specialties: ["Relationships", "Marital counseling"],
      price: "0.54",
      rating: 4.9
    },
    {
      name: "Thasleema Nujumudheen",
      title: "Consultant Psychologist",
      hours: "250+",
      specialties: ["pressure", "postpartum issues"],
      price: "0.40",
      rating: 4.7
    }
  ];

  // Filtered therapists based on search
  const filteredTherapists = therapists.filter(therapist =>
    therapist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FAQ items for the first section
  const followUpFaqs = [
    {
      q: "Will I have the same therapist for follow-up sessions?",
      benefits: [
        "Yes, continuity with the same therapist is key for progress.",
        "Your therapist will have a deeper understanding of your history and goals.",
        "Follow-up sessions help to track and build on your progress.",
        "Having the same therapist ensures a consistent therapeutic approach.",
        "If you need to change therapists, that option is available upon request."
      ]
    },
    {
      q: "What are the benefits of booking a therapy package for follow-ups?",
      benefits: [
        "Pre-booking ensures you have consistent slots with your therapist.",
        "Packages come at a discounted price, saving you money on multiple sessions.",
        "Your therapist can better prepare for each session, optimizing your progress.",
        "You don't have to worry about last-minute availability issues.",
        "Booking a package ensures commitment and continuity in your healing journey."
      ]
    }
  ];

  const generalFaqs = [
    {
      q: "How are online therapy sessions conducted, and what is the duration?",
      a: "We conduct online therapy sessions through three mediums: Google Meet video conferencing, audio calls (via Google Meet), or regular calls if there are network issues; and WhatsApp chat as a last resort. Each session typically lasts 50 minutes to 1 hour, ensuring ample time for meaningful discussions and progress."
    },
    {
      q: "How does online therapy work, and what are its benefits?",
      a: "Online therapy works via secure video, audio, or chat platforms. Benefits include convenience, privacy, flexibility, and access to specialized therapists regardless of your location."
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
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Continue Your Journey to <span className="text-indigo-600">Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Consistent care is essential for lasting progress. Secure your next session with your therapist 
            and stay on track with your mental health goals.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-md text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How can we support you today? Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
            How can we support you today?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className="bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 px-5 py-2 rounded-full text-sm font-medium transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Therapist name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Therapists Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTherapists.map((therapist, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-5 border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{therapist.name}</h3>
                    <p className="text-indigo-600 text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{therapist.rating}</span>
                    </div>
                  </div>
                  <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 flex items-center gap-1">
                    Quick View <span className="text-lg">🔍</span>
                  </button>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-500">{therapist.hours}+ Therapy Hours in:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {therapist.specialties.map((specialty, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>📅 {therapist.price}</span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-1.5 px-4 rounded-full transition-all">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTherapists.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No therapists found matching "{searchTerm}"
            </div>
          )}
        </div>
      </section>

      {/* Your Questions About Therapy, Answered Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Your Questions About Therapy, <span className="text-indigo-600">Answered</span>
          </h2>
          
          <div className="space-y-8 mt-10">
            {followUpFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-indigo-50 px-6 py-4">
                  <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {faq.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Consistent Follow-ups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why <span className="text-indigo-600">Consistent Follow-ups</span> Matter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: UserCheck, title: "Continuity of Care", description: "Build a deeper therapeutic relationship with your trusted therapist over time." },
              { icon: TrendingUp, title: "Track Progress", description: "Measure your growth and celebrate milestones along your healing journey." },
              { icon: Calendar, title: "Consistent Scheduling", description: "Secure your preferred time slots without last-minute availability issues." },
              { icon: Award, title: "Better Outcomes", description: "Regular sessions lead to more effective and lasting therapeutic results." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book a <span className="text-indigo-600">Therapy Package</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Secure your healing journey with our flexible therapy packages designed for lasting progress.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Save up to 20% on multiple sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Guaranteed slots with your preferred therapist</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personalized care plan tailored to your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flexible payment options available</span>
                </li>
              </ul>
              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all flex items-center gap-2">
                Explore Packages <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Popular Package</h3>
                <p className="text-gray-500">6 Session Bundle</p>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-indigo-600">$299</span>
                <span className="text-gray-400 line-through ml-2">$360</span>
                <span className="text-green-600 text-sm ml-2">Save 17%</span>
              </div>
              <button className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-2 rounded-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* General FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Any Questions?
        </h2>
        <div className="space-y-4">
          {generalFaqs.map((faq, index) => {
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

      {/* CTA Section */}
      <section className="bg-indigo-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Your healing journey continues here</h3>
          <p className="text-indigo-200 mb-6">Book your follow-up session today and stay committed to your wellness.</p>
          <button className="bg-white text-indigo-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Schedule Follow-up
          </button>
        </div>
      </section>
    </div>
  );
}