import { CreditCard, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Row({ label, value, desktopOnly }) {
  return (
    <div className={`justify-between text-sm ${desktopOnly ? "hidden md:flex" : "flex"}`}>
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function OrderSummary() {

    const navigate = useNavigate();
  return (
    <div>
      <div className="space-y-3 rounded-lg md:border md:border-gray-200 md:p-4">
        <h3 className="hidden font-semibold md:block">Order Summary</h3>

        <Row label="Subtotal" value="N 4,000.00" />
        <Row label="Zip(s)" value="N 1,000.00" />
        <Row label="Delivery" value="N 1,500.00" />
        <Row label="Front & Back Designs" value="N 1,000.00" desktopOnly />

        <div className="flex justify-between border-t pt-3 font-semibold">
          <span>Total</span>
          <span>N 6,500.00</span>
        </div>

        <p className="hidden items-start gap-2 rounded border p-2 text-xs md:flex">
          <Info size={14} className="shrink-0" />
          Please your totebag will be delivered in three to five working days.
        </p>
      </div>

      <button onClick={() => navigate("/payment")} className="mt-4 flex w-full items-center justify-between rounded border border-gray-300 px-4 py-3 text-xs md:border-0 md:bg-[#06201c] md:text-white">
        Payment options <CreditCard size={16} />
      </button>
    </div>
  );
}

export default OrderSummary;