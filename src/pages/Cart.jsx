import CartProduct from "../components/CartProduct";
import CartReviews from "../components/CartReviews";
import ProductSection from "../components/ProductSection";

// Bag images
import tote1 from "../assets/monoclebag.jpg";
import tote2 from "../assets/colorful.jpeg";
import tote3 from "../assets/plain-white.jpeg";
import tote4 from "../assets/happybag.jpg";
import tote5 from "../assets/peachbasket.jpeg";
import tote6 from "../assets/minimalist.jpeg";
import tote7 from "../assets/zero-waste.png";
import tote8 from "../assets/angel.jpeg";
import tote9 from "../assets/jeans.jpeg";
import tote10 from "../assets/standing-Tote-Bag.png";

const stock = [
  { id: 1, name: "Chinos", price: "N5,000", image: tote1 },
  { id: 2, name: "Chinos", price: "N5,000", image: tote3 },
  { id: 3, name: "Chinos", price: "N5,000", image: tote10 },
  { id: 4, name: "Chinos", price: "N5,000", image: tote4 },
  { id: 5, name: "Chinos", price: "N5,000", image: tote5 },
  { id: 6, name: "Chinos", price: "N5,000", image: tote8 },
  { id: 7, name: "Chinos", price: "N5,000", image: tote6 },
  { id: 8, name: "Chinos", price: "N5,000", image: tote7 }
];

function Cart() {
  return (
    <>
      <CartProduct />
      <CartReviews />
      
      <ProductSection title="Totebags you may like" subtitle="Similar totebags like the one selected." products={stock} />
    </>
  );
}

export default Cart;