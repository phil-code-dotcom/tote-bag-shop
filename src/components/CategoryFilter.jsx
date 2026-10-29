import { SlidersHorizontal } from "lucide-react";
import Button from "./Button";

const categories = ["All", "Corduroy", "Denim", "Adire", "Leather"];

function CategoryFilter() {
  return (
    <div className="mt-8 flex md:justify-center gap-3 overflow-x-hidden">
      {categories.map((name) => (
        <Button key={name} variant={name === "All" ? "filled" : "outline"}>
          {name === "All" && <SlidersHorizontal size={16} />}
          {name}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;