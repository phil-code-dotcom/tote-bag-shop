import Button from "./Button";

function CheckoutTabs({ active }) {
  return (
    <div className="mt-3 flex justify-center gap-3">
      <Button variant={active === "order" ? "filled" : "outline"}>Your order</Button>
      <Button variant={active === "payment" ? "filled" : "outline"}>Delivery & Payment</Button>
    </div>
  );
}

export default CheckoutTabs;