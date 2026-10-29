import { User, Plus } from "lucide-react";
import RatingStars from "./RatingStars";

function ReviewCard({ name, date, rating, size, color, design, image, text }) {
    return (
        <div className="rounded-xl border border-gray-200 p-4 md:border-0 md:p-0">
            <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-200 p-2">
                    <User size={24} />
                </div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
                <div className="order-2 flex items-center gap-2 text-sm md:order-1">
                    <span>Rating:</span>
                    <RatingStars rating={rating} />
                </div>

                <p className="order-1 text-xs md:order-2">
                    Size: {size} | Color: {color} | Design element: {design}
                </p>
            </div>

            <div className="mt-3 flex gap-3">
                <img src={image} alt="Review" className="h-16 w-16 rounded border object-cover" />
                <div className="hidden h-16 w-16 items-center justify-center rounded border border-dashed text-gray-300 md:flex">
                    <Plus />
                </div>
            </div>

            <p className="mt-3 text-sm text-gray-600">{text}</p>
        </div>
    );
}

export default ReviewCard;