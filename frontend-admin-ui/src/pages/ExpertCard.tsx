import { Calendar, Star } from "lucide-react";

export default function ExpertCard({ expert }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Top Section */}
      <div className="bg-yellow-100 p-4 flex justify-between items-center">
        <div>
          <h3 className="font-bold">{expert.name}</h3>
          <p className="text-sm text-gray-600">{expert.title}</p>

          <button className="mt-2 text-xs border px-2 py-1 rounded-full">
            Quick View 👁
          </button>
        </div>

        <img
          src={expert.avatar}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Middle */}
      <div className="p-4 text-sm text-gray-600">
        <p className="mb-2">
          <b>{expert.patients}+ Therapy Hours</b>
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-3">
          {expert.specialty.map((s: string) => (
            <span
              key={s}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="ml-1">{expert.rating}</span>
        </div>

        {/* Next Slot */}
        <div className="flex justify-between items-center mt-3">
          <div>
            <p className="text-xs">Next available</p>
            <p className="text-green-600 text-sm">
              {expert.nextAvailable
                ? new Date(expert.nextAvailable).toLocaleString("en-IN")
                : "N/A"}
            </p>
          </div>

          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
            Book →
          </button>
        </div>

        <p className="text-xs mt-2">
          Starts From ₹{expert.price || 1000}
        </p>
      </div>
    </div>
  );
}