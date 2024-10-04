import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="-bg--green-700 p-5 lg:p-4 w-full lg:w-[95%] lg:rounded-3xl fixed lg:top-5 z-50">
      <div className="flex justify-between items-center">
        <div className="">
          <img
            src="/64e23c26e073f39027b855a5_Logotype (1).svg"
            alt="Logo"
            className="w-[120px]"
          />
        </div>
        <div className="relative font-semibold lg:flex gap-5  -text--white-100 sm:hidden md:hidden ">
          <Link to="/" className="">
            About Us
          </Link>
          <Link to="/about" className="">
            Our Story
          </Link>
          <Link to="/gallery" className="">
            Our Harvest
          </Link>
          <Link to="/contact" className="">
            Benefits
          </Link>
          <Link to="/community" className="">
            Reviews
          </Link>
          <Link to="/social-media" className="">
            Contact Us
          </Link>
        </div>
        <div className="">
          <DropdownMenu />
          <button className="-border--lime-green border rounded-xl font-semibold p-4 -text--lime-green lg:block md:hidden sm:hidden">
            Buy Template
          </button>
        </div>
      </div>
    </nav>
  );
}
