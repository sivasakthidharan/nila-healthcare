import { COLORS } from "../constants/colors";

const TherapistCard = ({ therapist }: any) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={therapist.avatar}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold text-lg">
        {therapist.name}
      </h3>

      <p className="text-sm text-gray-500">
        {therapist.specialization}
      </p>

      <p className="text-sm mt-1">⭐ {therapist.rating}</p>

      <button
        className="mt-3 w-full py-2 rounded-lg text-white"
        style={{ backgroundColor: COLORS.primary }}
      >
        Book Session
      </button>
    </div>
  );
};

export default TherapistCard;