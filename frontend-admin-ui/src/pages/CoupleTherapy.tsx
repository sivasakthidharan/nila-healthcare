import { useState } from "react";
import { 
  ChevronDown, 
  Star, 
  Quote, 
  Calendar, 
  Shield, 
  EyeOff, 
  Globe, 
  Video, 
  Award,
  Sparkles,
  MessageCircle
} from "lucide-react";

export default function CoupleTherapy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How are online therapy sessions conducted, and what is the duration?",
      a: "We conduct online therapy sessions through three mediums: Google Meet video conferencing, audio calls (via Google Meet), or regular calls if there are network issues; and WhatsApp chat as a last resort. Each session typically lasts 30 minutes to 1 hour, while couple therapy sessions extend to 1.5 hours, ensuring ample time for meaningful discussions and progress."
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
      q: "What is the validity of package sessions?",
      a: "Packages are typically valid for 6 months from the date of purchase, giving you flexibility to schedule sessions at your convenience."
    },
    {
      q: "What languages are available for online sessions?",
      a: "Sessions are available in English, Hindi, Tamil, Telugu, Malayalam, Kannada, and more. Please specify your preference during booking."
    },
    {
      q: "How do I know if the therapist is the right fit for me?",
      a: "We encourage an initial consultation session to assess compatibility. You can discuss your goals and see if their approach aligns with your needs."
    },
    {
      q: "Where do you offer online couple therapy in Malaysia?",
      a: "Our online couple therapy is available nationwide across Malaysia, from Kuala Lumpur to Penang, Johor Bahru, and all other states."
    }
  ];

  const testimonials = [
    {
      name: "Fathima",
      content: "My experience with Oppam Online Mental Health Therapy has been outstanding. They offer the best online counselling in Kerala, with therapists who are not only knowledgeable but also genuinely caring. Their online therapy sessions have been a crucial part of my mental health journey, and I'm grateful for the positive changes they've helped me achieve.",
      author: "Rahul",
      extraNote: "Your warmth and genuine concern have helped me find strength I didn't know I had. I am so fortunate to have you by my side. 😊😊"
    },
    {
      name: "Anaswara",
      content: "You aren't just a professional; they've become a lifeline for me. Your kindness and understanding have made me feel truly heard and cared for.",
      author: "Anaswara",
      extraNote: null
    },
    {
      name: "Arjun",
      content: "You've been more than just a psychologist to me; you've been a guiding light through some of my darkest days. Your empathy, patience, and understanding have made a world of difference in my life. I can't thank you enough for helping me find my way back to a happier and healthier me.",
      author: "Arjun",
      extraNote: null
    }
  ];

  const conditions = [
    "Anxiety & Stress",
    "Depression & Mood Disorders",
    "Trauma & PTSD",
    "Relationship Issues",
    "Premarital Assistance",
    "Anger Management",
    "Queer Affirmative Therapy",
    "Addiction & Substance Abuse",
    "Parenting & Child Behavioral Issue"
  ];

  const features = [
    { icon: Calendar, title: "Seamless Online Booking" },
    { icon: Shield, title: "Zero Judgement" },
    { icon: EyeOff, title: "100% Privacy Assured" },
    { icon: Globe, title: "Consult From Anywhere, Anytime" },
    { icon: Video, title: "Turn On Camera Only If You Wish" },
    { icon: Award, title: "Certified & Experienced Psychologist" }
  ];

  return (
    <>
      {/* Know what you're Fighting with Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Know what you're Fighting with
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Finding the right treatment is a key step in your mental health journey. 
              Talk to one of our Mental Health experts to receive a personalized recommendation 
              for your concerns.
            </p>
            
            {/* Conditions Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {conditions.map((condition, idx) => (
                <span
                  key={idx}
                  className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {condition}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
              Get Therapy
            </button>
          </div>

          {/* Right Column - Chat Card */}
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 shadow-lg">
            <div className="bg-white rounded-xl p-5 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Not sure what kind of care you need?</p>
                  <p className="text-sm text-gray-500">Talk to one of Oppam's first responders</p>
                </div>
              </div>
              <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Oppam Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why choose <span className="text-purple-600">Oppam</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Hear out their Stories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear out their Stories
          </h2>
          <p className="text-gray-600 text-lg">Real experiences from people who found their way back to themselves</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Header with name and quote icon */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <Quote className="w-8 h-8 text-white/30" />
                </div>
              </div>

              {/* Stars rating */}
              <div className="flex px-6 pt-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Main testimonial content */}
              <div className="p-6 flex-grow">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                </div>

                {/* Extra note if exists (only for Fathima/Rahul) */}
                {testimonial.extraNote && (
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-700 text-sm">{testimonial.extraNote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-3">The best decision they ever took was to</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
            Get Therapy
          </button>
        </div>
      </section>

      {/* Any Questions? - FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Any Questions?
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border rounded-xl bg-white shadow-sm">
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}