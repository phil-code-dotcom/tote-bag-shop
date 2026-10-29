import { Link } from "react-router-dom";
import { MapPin, Pencil, CreditCard, Plus, X } from "lucide-react";
import {
  FaCcVisa,
  FaCcStripe,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";
import Button from "../components/Button";
import CheckoutTabs from "../components/CheckoutTabs";
import PaymentForm from "../components/PaymentForm";
import Checkout from "./Checkout";

function Payment() {
  return (
    <>
      {/* Desktop: the checkout page stays behind the modal */}
      <div className="hidden md:block">
        <Checkout />
      </div>

      {/* Desktop: dark overlay + centered box. Mobile: normal page */}
      <div className="md:fixed md:inset-0 md:z-50 md:flex md:items-center md:justify-center md:bg-black/60">
        <div className="mt-6 md:relative md:mt-0 md:w-[480px] md:rounded-md md:bg-[#eef5f3] md:p-8">
          <Link to="/checkout" className="absolute right-3 top-3 hidden md:block">
            <X size={18} />
          </Link>

          {/* Desktop only */}
          <div className="hidden text-center md:block">
            <h2 className="text-2xl">Payment Method.</h2>
            <p className="text-xs">
              Effortlessly manage your purchases and checkout with ease.
            </p>
            <div className="my-4 flex justify-center gap-3 text-2xl">
              <FaCcVisa />
              <FaCcStripe />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcApplePay />
            </div>
          </div>

          {/* Mobile only */}
          <div className="md:hidden">
            <h1 className="text-xl font-semibold">Checkout</h1>
            <CheckoutTabs active="payment" />

            <div className="mt-6 flex items-center gap-4">
              <div className="rounded bg-gray-100 p-6">
                <MapPin size={32} />
              </div>
              <div className="flex-1">
                <p className="font-semibold">Destination</p>
                <p className="text-xs text-gray-600">
                  No 7, Allen street off quetegba bus-stop, lagos Nigeria.
                </p>
                <div className="mt-2 flex justify-end">
                  <Button variant="filled">
                    <Pencil size={14} /> Edit
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-6 flex items-center gap-2 rounded bg-gray-100 px-4 py-3 text-xs">
              Payment options <CreditCard size={14} />
            </p>

            <div className="mt-4 rounded-xl bg-[#101a6b] p-5 text-white">
              <div className="flex justify-between text-xs">
                <span>Debit.</span>
                <span>Bank Name & Logo</span>
              </div>
              <div className="mt-3 h-6 w-9 rounded bg-yellow-300"></div>
              <p className="mt-3 text-lg tracking-widest">5355 0348 5945 5045</p>
              <div className="mt-2 flex items-end justify-between text-xs">
                <div>
                  <p>12/24</p>
                  <p className="mt-2">CIROMA CHINEYE ADEBUNLE</p>
                </div>
                <FaCcMastercard size={32} />
              </div>
            </div>

            <p className="mt-3 flex items-center justify-end gap-2 text-xs">
              <Plus size={14} className="rounded bg-gray-100 p-0.5" /> Add a new card
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <PaymentForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;