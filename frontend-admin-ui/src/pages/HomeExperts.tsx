// import { useEffect, useState } from "react";
// import ExpertCard from "./ExpertCard";

// const API_URL = import.meta.env.VITE_API_URL;


// type Expert = {
//   id: number;
//   name: string;
//   title: string;
//   specialty: string[];
//   rating: number;
//   patients: number;
//   nextAvailable: string;
//   avatar: string;
// };

// export default function HomeExperts() {
//   const [experts, setExperts] = useState<Expert[]>([]);

//   useEffect(() => {
//     fetch(`${API_URL}/api/experts`)
//       .then(res => res.json())
//       .then(data: any) => {
//             if (!Array.isArray(data)) {
//                 console.error("Invalid experts API:", data);
//                 return;
//                }
//         const formatted: Expert[] = data.map((e: any) => ({
//           id: e.id,
//           name: e.name,
//           title: e.title,
//         //   specialty: [e.specialization],
//         specialty: e.specialization ? [e.specialization] : [],
//           rating: e.rating || 0,
//           patients: e.patients || 0,
//           nextAvailable: e.next_available,
//           avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}`
//         }));

//         setExperts(formatted);
//       });
//         .catch(err => console.error("Fetch error:", err));
//   }, []);

//   return (
//     <section className="py-16 bg-gray-100">
//       <h2 className="text-2xl font-bold text-center mb-10">
//         Our Experts
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {experts.map((exp: any) => (
//           <ExpertCard key={exp.id} expert={exp} />
//         ))}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";

const API_URL = import.meta.env.VITE_API_URL;

type Expert = {
  id: number;
  name: string;
  title: string;
  specialty: string[];
  rating: number;
  patients: number;
  nextAvailable: string;
  avatar: string;
};

export default function HomeExperts() {
  const [experts, setExperts] = useState<Expert[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/experts`)
      .then((res) => res.json())
      .then((data: any) => {
        // ✅ Safety check
        if (!Array.isArray(data)) {
          console.error("Invalid experts API:", data);
          return;
        }

        const formatted: Expert[] = data.map((e: any) => ({
          id: e.id,
          name: e.name,
          title: e.title,
          specialty: e.specialization ? [e.specialization] : [],
          rating: Number(e.rating) || 0,
          patients: Number(e.patients) || 0,
          nextAvailable: e.next_available || "",
          avatar: e.avatar
            ? `${API_URL}/uploads/${e.avatar}`
            : `https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}&background=0ea5e9&color=fff`,
        }));

        setExperts(formatted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-10"> Our Experts </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {experts.map((exp) => (
          <ExpertCard key={exp.id} expert={exp} />
        ))}
      </div>
    </section>
  );
}