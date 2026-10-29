import ReviewCard from "./ReviewCard";
import reviewImage from "../assets/tote-1.jpeg";

const reviews = [
  {
    id: 1,
    name: "Yusuf",
    date: "May 15, 2024",
    rating: 4,
    size: "16g",
    color: "Cream",
    design: "Cream",
    image: reviewImage,
    text: "My tote bag exceeded my expectations in every way. The design matched my description perfectly, showcasing outstanding quality and craftsmanship. The exceptional service ensured that I received exactly what I envisioned.",
  },
  {
    id: 2,
    name: "Yusuf",
    date: "May 15, 2024",
    rating: 4,
    size: "16g",
    color: "Cream",
    design: "Cream",
    image: reviewImage,
    text: "My tote bag exceeded my expectations in every way. The design matched my description perfectly, showcasing outstanding quality and craftsmanship. The exceptional service ensured that I received exactly what I envisioned.",
  },
  {
    id: 3,
    name: "Yusuf",
    date: "May 15, 2024",
    rating: 4,
    size: "16g",
    color: "Cream",
    design: "Cream",
    image: reviewImage,
    text: "My tote bag exceeded my expectations in every way. The design matched my description perfectly, showcasing outstanding quality and craftsmanship. The exceptional service ensured that I received exactly what I envisioned.",
  }
];

function CartReviews() {
  return (
    <section className="mt-10">
      <h3 className="font-semibold">Description</h3>
      <p className="mt-2 text-sm text-gray-600">
        The Cream-Colored Totebag is a blend of elegance and functionality.
        Crafted from luxurious fabric, its spacious interior accommodates daily
        essentials. Lightweight and stylish, it's perfect for any occasion,
        offering comfort and sophistication.
      </p>

      <div className="mt-8 md:ml-auto md:w-1/2">
        <h3 className="font-semibold">Customers Reviews</h3>
        <p className="text-xs text-gray-500">Testimonies from customers.</p>

        <div className="mt-4 space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartReviews;