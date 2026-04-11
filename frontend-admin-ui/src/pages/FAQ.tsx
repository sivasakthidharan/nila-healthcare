import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Oppam different from other online counselling platforms?",
    answer:
      "Oppam is one of Kerala’s first online counselling platforms, built specifically for Malayali communities. We offer online counselling in Malayalam, English, and bilingual formats, with a strong focus on being human-first, culturally sensitive, and confidential. Trusted by thousands of Malayalis worldwide, Oppam connects you with experienced Malayali psychologists in Kerala who provide consistent, evidence-based mental health support 24/7.",
  },
  {
    question: "How does online counselling with Oppam work?",
    answer:
        "Oppam offers online counselling in Kerala and abroad, allowing you to speak with qualified psychologists through secure video or audio sessions from anywhere in the world. You can choose your therapist, book a session online, and attend therapy from a private, comfortable space. With Oppam, therapy is always secure, confidential, and non-judgemental, helping you feel seen and understood.  "},
  {
    question: "Is online counselling effective compared to in-person therapy?",
    answer:
        "Online counselling with Oppam is just as effective as in-person therapy, sometimes even more. While in-person therapy allows physical presence, online counselling in Malayalam removes barriers like travel, time constraints, and location, making consistent mental health support accessible and easier."
  },
  {
    question: "What issues can online counselling with Oppam help with?",
    answer:
      "Online counselling with Oppam is just as effective as in-person therapy, sometimes even more. While in-person therapy allows physical presence, online counselling in Malayalam removes barriers like travel, time constraints, and location, making consistent mental health support accessible and easier.",
  },
  {
    question: "Is online counselling suitable for first-time therapy seekers?",
    answer:
      "Yes, online counseling  Kerala is often easier for first-time clients as it is more accessible, feels less intimidating, and allows you to start therapy from the comfort of your own space. ",
  },
  {
    question: "Can I switch therapists if I don’t feel comfortable?",
    answer:
      "YeYes you can. If you ever feel like your current therapist isn’t the right fit for you or is no longer meeting your needs, you can switch therapists easily. At Oppam, your comfort comes first.s, you can switch therapists anytime to find the right fit.",
  },
  {
    question: "Can I attend online counselling from outside India?",
    answer:
      "Definitely! Oppam’s support is available 24/7, allowing you to get therapy at a time that suits you best, wherever you are in the world. Whether you’re in Kochi, Kuwait, or Kansas, Oppam is here for you. You can connect with our therapists from anywhere through the pages: USA, UAE, Singapore, Saudi Arabia, Qatar, Oman, New Zealand, Bangalore, Calicut, Canada, London, Trivandrum, Netherlands, Riyadhes, Oppam supports global users, especially Malayalis living abroad.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Any Questions?
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border rounded-xl bg-white shadow-sm"
            >
              
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}