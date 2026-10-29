import { Bike, Star, Plus, Minus, CircleCheck } from "lucide-react";
import Button from "./Button";
import bag from "../assets/zero-waste.png";

const thumbnails = [
    { id: 1, label: "WHITE", image: bag },
    { id: 2, label: "BLACK", image: bag },
    { id: 3, label: "GREY", image: bag },
];
const options = ["Zip", "Button", "Zip or Button", "None"];
const sizes = ["XL", "L", "S", "M"];

function CartProduct() {
    return (
        <section>
            <div className="hidden md:block">
                <h1 className="text-3xl">Your Cart.</h1>
                <p className="text-sm">Review and manage the items in your shopping cart.</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <img src={bag} alt="Cream colored totebag" className="w-full bg-gray-100" />

                    <div className="mt-4 flex justify-center gap-4">
                        {thumbnails.map((item) => (
                            <div key={item.id} className="text-center text-xs">
                                <img src={item.image} alt={item.label} className="h-20 w-20 bg-gray-100 object-cover" />
                                <p className="mt-1 hidden md:block">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
                        {options.map((option) => (
                            <span key={option} className="flex items-center gap-1">
                                <CircleCheck size={14} />
                                {option}
                            </span>
                        ))}
                    </div>
                    <p className="mt-2 hidden text-center text-xs md:block">
                        Zip cost N1,000.00 extra while button cost N500.00
                    </p>
                </div>

                <div>
                    <p className="hidden text-xs md:block">Product</p>
                    <div className="hidden w-fit items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 md:flex">
                        <Bike size={20} />
                        <span>Delivery fee</span>
                        <span className="rounded bg-[#06201c] px-2 text-xs text-white">1500</span>
                    </div>

                    <h2 className="mt-3 text-2xl">Cream colored totebag</h2>

                    <div className="mt-2 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <span key={n} className="bg-[#06201c] p-1">
                                <Star
                                    size={14}
                                    className={n <= 4 ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}
                                />
                            </span>
                        ))}
                        <span className="ml-2 text-sm">2.4</span>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm">
                        <p>Price: <strong>N 4,000</strong></p>
                        <p className="flex items-center gap-2">
                            Quantity: <Plus size={14} /> 1 <Minus size={14} />
                        </p>
                    </div>

                    <div className="mt-4 flex gap-2 text-xs md:hidden">
                        {sizes.map((size) => (
                            <span key={size} className="rounded border border-gray-300 px-2 py-1">
                                {size}
                            </span>
                        ))}
                    </div>

                    <p className="mt-4 hidden text-sm text-gray-600 md:block">
                        The Cream-Colored Totebag is a blend of elegance and functionality.
                        Crafted from luxurious fabric, its spacious interior accommodates
                        daily essentials.
                    </p>

                    <p className="mt-4 flex items-center gap-2 text-sm md:hidden">
                        <Bike size={18} /> Delivery is not free-of charge
                    </p>

                    <div className="mt-6 space-y-3">
                        <Button variant="wideOutline">Buy Now</Button>
                        <Button variant="wideDark">Add to cart</Button>
                    </div>

                    <select className="mt-4 w-full rounded-lg border border-teal-200 bg-gray-100 p-3 text-teal-900">
                        <option>Select your location</option>
                        <option>Abuja</option>
                        <option>Lagos</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default CartProduct;