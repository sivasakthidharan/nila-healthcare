// import { Calendar, Star } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function ExpertCard({ expert }: any) {
//   const navigate = useNavigate();  

//   const handleBook = () => {
//     // Navigate to appointments page and pass the therapist name
//     navigate("/appointments", {
//       state: { selectedTherapist: expert.name }
//     });
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

//       {/* Top Section */}
//       <div className="bg-yellow-100 p-4 flex justify-between items-center">
//         <div>
//           <h3 className="font-bold">{expert.name}</h3>
//           <p className="text-sm text-gray-600">{expert.title}</p>

//           <button className="mt-2 text-xs border px-2 py-1 rounded-full">
//             Quick View 👁
//           </button>
//         </div>

//         <img
//           src={expert.avatar}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//       </div>

//       {/* Middle */}
//       <div className="p-4 text-sm text-gray-600">
//         <p className="mb-2">
//           <b>{expert.patients}+ Therapy Hours</b>
//         </p>

//         {/* Tags */}
//         <div className="flex gap-2 flex-wrap mb-3">
//           {expert.specialty.map((s: string) => (
//             <span
//               key={s}
//               className="text-xs bg-gray-100 px-2 py-1 rounded"
//             >
//               {s}
//             </span>
//           ))}
//         </div>

//         {/* Rating */}
//         <div className="flex items-center mb-3">
//           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//           <span className="ml-1">{expert.rating}</span>
//         </div>

//         {/* Next Slot */}
//         <div className="flex justify-between items-center mt-3">
//           <div>
//             <p className="text-xs">Next available</p>
//             <p className="text-green-600 text-sm">
//               {expert.nextAvailable
//                 ? new Date(expert.nextAvailable).toLocaleString("en-IN")
//                 : "N/A"}
//             </p>
//           </div>

//           <button 
//           onClick={handleBook}
//           className="bg-black text-white px-4 py-1 rounded-full text-sm">
//             Book →
//           </button>
//         </div>

//         <p className="text-xs mt-2">
//           Starts From ₹{expert.price || 1000}
//         </p>
//       </div>
//     </div>
//   );
// }

// components/ExpertCard.tsx
import { useState } from "react";
import BookingModal from "./BookingModel";
import { Star, Users } from "lucide-react";

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

export default function ExpertCard({ expert }: { expert: Expert }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <img src={expert.avatar} alt={expert.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">{expert.name}</h3>
          <p className="text-gray-600 text-sm">{expert.title}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {expert.specialty.map((s, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span>{expert.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{expert.patients}+ patients</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-400">
            Next: {expert.nextAvailable ? new Date(expert.nextAvailable).toLocaleString() : "Available soon"}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Book
          </button>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} expert={{ id: expert.id, name: expert.name }} />
    </>
  );
}