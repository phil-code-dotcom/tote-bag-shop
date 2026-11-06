import { User, Plus } from "lucide-react";
import RatingStars from "./RatingStars";

function ReviewCard({ name, date, rating, size, color, design, image, text, avatar }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 rounded-xl border border-gray-200 p-4 md:border-0 md:p-0">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-200">
        {avatar ? (
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
        ) : (
          <User size={24} />
        )}
      </div>

      <div className="self-center">
        <p className="text-xl leading-tight">{name}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      <div className="col-span-2 flex flex-col gap-3 md:col-span-1 md:col-start-2">
        <div className="flex flex-col gap-2">
          <div className="order-2 flex items-center gap-2 text-sm md:order-1">
            <span>Rating:</span>
            <RatingStars rating={rating} />
          </div>
          <p className="order-1 text-sm md:order-2">
            Size: {size} | Color: {color} | Design element: {design}
          </p>
        </div>

        <div className="flex gap-3">
          <div className="flex h-20 w-24 items-center justify-center rounded border p-2">
            <img src={image} alt="Review" className="h-full object-contain" />
          </div>
          <div className="hidden h-20 w-24 items-center justify-center rounded border text-gray-300 md:flex">
            <Plus size={32} />
          </div>
        </div>

        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;