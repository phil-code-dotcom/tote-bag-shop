import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <div className="bg-[#FAFFFF]">
        <div className="mx-auto max-w-[1240px] px-4">
          <Navbar />
          <SearchBar />
          <CategoryFilter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />

          </Routes>
        </div>

        <Footer />
        
      </div>

      
    </>
  );
}

export default App;