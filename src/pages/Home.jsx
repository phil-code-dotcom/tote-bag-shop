import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FeatureSection from "../components/FeatureSection";

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

const availableStock = [
  { id: 1, name: "Chinos", price: "N5,000", image: tote1 },
  { id: 2, name: "Chinos", price: "N5,000", image: tote2 },
  { id: 3, name: "Chinos", price: "N5,000", image: tote3 },
  { id: 4, name: "Chinos", price: "N5,000", image: tote4 },
  { id: 5, name: "Chinos", price: "N5,000", image: tote5 },
  { id: 6, name: "Chinos", price: "N5,000", image: tote6 },
  { id: 7, name: "Chinos", price: "N5,000", image: tote7 },
  { id: 8, name: "Chinos", price: "N5,000", image: tote8 },
  { id: 9, name: "Chinos", price: "N5,000", image: tote1 },
  { id: 10, name: "Chinos", price: "N5,000", image: tote3 },
  { id: 11, name: "Chinos", price: "N5,000", image: tote9 },
  { id: 12, name: "Chinos", price: "N5,000", image: tote4 }
];

const otherStock = [
  { id: 1, name: "Chinos", price: "N5,000", image: tote1 },
  { id: 2, name: "Chinos", price: "N5,000", image: tote3 },
  { id: 3, name: "Chinos", price: "N5,000", image: tote10 },
  { id: 4, name: "Chinos", price: "N5,000", image: tote4 },
  { id: 5, name: "Chinos", price: "N5,000", image: tote5 },
  { id: 6, name: "Chinos", price: "N5,000", image: tote8 },
  { id: 7, name: "Chinos", price: "N5,000", image: tote6 },
  { id: 8, name: "Chinos", price: "N5,000", image: tote7 },
  { id: 9, name: "Chinos", price: "N5,000", image: tote8 },
  { id: 10, name: "Chinos", price: "N5,000", image: tote5 },
  { id: 11, name: "Chinos", price: "N5,000", image: tote6 },
  { id: 12, name: "Chinos", price: "N5,000", image: tote7 },
];

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

function Home() {
  return (
    <>
      <Hero />

      {/* For the available stocks section */}
      <ProductSection
        title="Available Stock"
        subtitle="These totebags are currently available for sales"
        products={availableStock}
      />

      {/* other stock section */}
      <ProductSection
        title="Other Stock"
        subtitle="These totebags are currently available for sales"
        products={otherStock}
      />

      <FeatureSection />

      <ProductSection title="" subtitle="" products={stock} />
    </>
  );
}

export default Home;