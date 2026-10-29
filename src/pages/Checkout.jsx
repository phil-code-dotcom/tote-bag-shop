import { MapPin, Pencil } from "lucide-react";
import Button from "../components/Button";
import CheckoutItem from "../components/CheckoutItem";
import OrderSummary from "../components/OrderSummary";
import bagImage from "../assets/plain-white.jpeg";

const items = [
  { id: 1, name: "Cream totebag", sku: "thetotebag1500", color: "Cream", price: "N 4,000", image: bagImage },
  { id: 2, name: "Cream totebag", sku: "thetotebag1500", color: "Cream", price: "N 4,000", image: bagImage },
  { id: 3, name: "Cream totebag", sku: "thetotebag1500", color: "Cream", price: "N 4,000", image: bagImage },
  { id: 4, name: "Cream totebag", sku: "thetotebag1500", color: "Cream", price: "N 4,000", image: bagImage },
];

function Checkout() {
  return (
    <section className="mt-6">
      <div className="hidden md:block">
        <h1 className="text-3xl">Shopping Cart.</h1>
        <p className="text-sm">Effortlessly manage your purchases and checkout with ease.</p>
      </div>

      <div className="md:hidden">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <div className="mt-3 flex justify-center gap-3">
          <Button variant="filled">Your order</Button>
          <Button variant="outline">Delivery & Payment</Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
        <div>
          {items.map((item) => (
            <CheckoutItem key={item.id} {...item} />
          ))}

          <div className="mt-6 rounded-lg border border-gray-200 p-4 md:hidden">
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> Delivery Location
            </p>
            <p className="mt-3 rounded bg-gray-100 p-2 text-xs text-gray-500">
              Add your location and well deliver to you
            </p>
            <div className="mt-3 flex justify-end">
              <Button variant="filled">
                <Pencil size={14} /> Edit
              </Button>
            </div>
          </div>
        </div>

        <div>
          <OrderSummary />
          <div className="mt-6 md:hidden">
            <Button variant="wideOutline">Proceed to checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;