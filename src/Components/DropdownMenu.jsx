import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "../App.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden md:block sm:block">
      <button className="dropdown-container bg-slate-800 p-2 rounded-full ">
        <IoMenu
          className="md:text-4xl lg:text-4xl sm:text-2xl -text--white-100"
          onClick={toggleDropdown}
          style={{ display: isOpen ? "none" : "block" }}
        />
        <IoClose
          className="md:text-4xl sm:text-2xl -text--white-100"
          onClick={closeDropdown}
          style={{ display: isOpen ? "block" : "none" }}
        />
      </button>
      <div className="z-50">
        <div
          className={` dropdown-menu absolute mt-0 sm:w-full -right-[0%] justify-center -bg--green-700 -text--white-100 sm:py-10 text-white text-center flex flex-col gap-5 my-4 duration-700 ease-in-out px-5 ${
            isOpen ? "active" : "inactive"
          }`}
          ref={menuRef}
        >
          <div className="relative font-semibold  gap-3 text-white ">
            <NavLink
              to="/"
              className="sm:block px-4 py-2  md:hidden hover:text-primary-1"
            >
              About Us
            </NavLink>
            <NavLink
              to="/about"
              className="sm:block px-4 py-2 md:hidden hover:text-primary-1"
            >
              Our Story
            </NavLink>
            <NavLink
              to="/gallery"
              className="sm:block px-4 py-2  hover:text-primary-1"
            >
              Our Harvest
            </NavLink>
            <NavLink
              to="/contact"
              className="sm:block px-4 py-2 hover:text-primary-1"
            >
              Benefits
            </NavLink>
            <NavLink
              to="/community"
              className="sm:block px-4 py-2 hover:text-primary-1"
            >
              Reviews
            </NavLink>
            <NavLink
              to="/social-media"
              className="sm:block px-4 py-2 hover:text-primary-1"
            >
              Contact Us
            </NavLink>
            <button className="-border--lime-green border w-full p-4 rounded-xl">
              Buy Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
