import { FaCcMastercard } from "react-icons/fa";
import { PaymentIcon } from 'react-svg-credit-card-payment-icons';
import Button from "./Button";

const inputStyle =
  "w-full rounded border-none bg-[#f1ffff] p-3 text-sm outline-none";

function PaymentForm() {
  return (
    <div className="space-y-4 text-sm">
      <div>
        <label>Card Number</label>
        <div className="relative mt-1">
          <input type="text" placeholder="5355 0348 5945 5045" className={inputStyle} />
          {/* <FaCcMastercard size={22} className="absolute right-3 top-3 text-orange-500" /> */}
          <PaymentIcon type="Mastercard" format="logo" width={40} className="absolute right-3 top-3 text-orange-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>CVV</label>
          <input type="text" placeholder="0522" className={`mt-1 ${inputStyle}`} />
        </div>
        <div>
          <label>Expires</label>
          <input type="text" placeholder="05/2024" className={`mt-1 ${inputStyle}`} />
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs">
        <input type="checkbox" defaultChecked />
        Save my debit card information
      </label>

      <Button variant="wideDark">Checkout</Button>
    </div>
  );
}

export default PaymentForm;