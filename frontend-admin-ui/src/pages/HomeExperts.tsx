import { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";

const API_URL = import.meta.env.VITE_API_URL;

export default function HomeExperts() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/experts`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((e: any) => ({
          id: e.id,
          name: e.name,
          title: e.title,
        //   specialty: [e.specialization],
        specialty: e.specialization ? [e.specialization] : [],
          rating: e.rating || 0,
          patients: e.patients || 0,
          nextAvailable: e.next_available,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}`
        }));

        setExperts(formatted);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-10">
        Our Experts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {experts.map((exp: any) => (
          <ExpertCard key={exp.id} expert={exp} />
        ))}
      </div>
    </section>
  );
}