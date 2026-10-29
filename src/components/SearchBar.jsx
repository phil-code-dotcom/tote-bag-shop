
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="mt-5 mx-auto flex w-full max-w-xl overflow-hidden rounded-lg shadow">
      <div className="bg-[#06201c] p-4 text-white">
        <Search size={20} />
      </div>
      <input
        type="text"
        placeholder="search for your favourite totebag, colour, design patterns"
        className="w-full bg-white px-4 text-sm outline-none"
      />
    </div>
  );
}

export default SearchBar;