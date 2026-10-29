import { Plus, Minus, Trash2 } from "lucide-react";
import RatingStars from "./RatingStars";

function CheckoutItem({ name, sku, color, price, image }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 py-4">
      <img src={image} alt={name} className="h-16 w-16 rounded bg-gray-100 object-cover md:h-24 md:w-24" />

      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <p className="hidden text-xs text-gray-500 md:block">{sku}</p>
        <p className="text-xs text-gray-500 md:hidden">1 Item • Zip</p>
        <div className="mt-1">
          <RatingStars rating={4} />
        </div>
        <p className="mt-1 hidden text-xs text-gray-500 md:block">Color: {color}</p>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 md:flex-nowrap md:gap-10">
        <p className="order-1 w-full text-right font-semibold md:order-2 md:w-auto">{price}</p>

        <div className="order-2 flex items-center gap-2 text-sm md:order-1">
          <Plus size={14} /> <span className="rounded border px-2">1</span> <Minus size={14} />
        </div>

        <button className="order-3 rounded bg-gray-100 p-2 text-gray-600 md:bg-[#06201c] md:text-white">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;