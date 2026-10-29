import { ArrowRight } from "lucide-react";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

const quickLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Contact Us",
  "Terms of Service",
  "Refund policy",
];

function SocialIcons({ showWhatsapp }) {
  return (
    <div className="flex gap-4">
      <FaTiktok size={22} />
      <FaInstagram size={22} />
      {showWhatsapp && <FaWhatsapp size={22} />}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-black px-8 py-12 text-center text-white md:text-left">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 md:grid-cols-3">
        <div className="flex flex-col">
          <p className="order-2 mt-4 max-w-xs self-center text-sm md:order-1 md:mt-0 md:self-start">
            We provide comfy tote bags that won't mess up your style and have
            plenty of space for all your stuff.
          </p>

          <h2 className="order-1 text-3xl font-light md:order-2 md:mt-8 md:text-5xl">
            thetotebagshop®
          </h2>

          <div className="order-3 mt-6 hidden md:block">
            <SocialIcons />
          </div>
        </div>

        <div className="justify-self-center">
          <h3 className="text-lg font-semibold">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <p className="mt-4 text-sm">
            Subscribe to our Newsletter to be the first to be aware of recent
            production and other production offers.
          </p>
          <div className="mt-6 flex items-center justify-between rounded-lg bg-white/10 p-2 pl-4 text-left">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent text-sm outline-none"
            />
            <Button variant="filled">
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <SocialIcons showWhatsapp />
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-xs md:mt-16 md:text-right">
        © thetotebagshop <strong>2024.</strong>
      </p>
    </footer>
  );
}

export default Footer;