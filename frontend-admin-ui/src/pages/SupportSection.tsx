import { Search } from "lucide-react";

const services = [
  { name: "Consultant Psychologist", icon: "💬", bg: "bg-yellow-100" },
  { name: "Sexual Health", icon: "❤️", bg: "bg-pink-100" },
  { name: "Clinical Psychologist", icon: "🪑", bg: "bg-green-100" },
  { name: "Psychiatrist", icon: "🤗", bg: "bg-yellow-100" },
];

export default function SupportSection() {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        How can we support you today?
      </h2>

      <div className="flex flex-wrap justify-center gap-12 mb-12">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${item.bg} text-2xl transition-transform duration-300 group-hover:scale-110`}
            >
              {item.icon}
            </div>
            <p className="mt-4 text-gray-700 font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm border">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by Therapist name..."
            className="w-full outline-none text-sm"
          />
        </div>
      </div>
    </section>
  );
}