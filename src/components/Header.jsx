import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Cart from "../assets/Cart.svg";
import Menu from "../assets/Menu.svg";
import Cross from "../assets/Cross.svg";
import MobileCart from "../assets/MobileCart.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, label: "Home", slug: "/" },
    { id: 2, label: "Shop", slug: "/shop" },
  ];

  const location = useLocation();

  const handleNavbar = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      <header className=" hidden sm:flex justify-between items-center mx-8 my-6 ">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>

        <div className="flex gap-5 text-md inter">
          {navLinks?.map((item) => {
            return (
              <nav key={item?.id}>
                <NavLink
                  to={item?.slug}
                  className={`${
                    item?.slug === location.pathname
                      ? "bg-black text-white"
                      : null
                  } hover:bg-black rounded-full px-4 py-2 hover:text-white transition-all duration-300`}
                >
                  {item?.label}
                </NavLink>
              </nav>
            );
          })}
        </div>

        <Link to={"/cart"} className="flex gap-1 items-center">
          <img src={Cart} alt="cart-icon" />
          <h1 className="text-black inter text-md font-semibold">
            Cart
          </h1>
        </Link>
      </header>

      {/* Mobile */}
      <header
        className="sm:hidden  p-6 h-[68px] flex justify-between items-center relative 
        overflow-hidden shadow-sm z-10"
      >
        <Link to={"/"} className="sm:hidden flex gap-1 items-center">
          <img className="w-24 h-24" src={Logo} alt="logo" />
        </Link>
        {/* Masing Overlay */}
        <div
          className={`bg-black/10 fixed inset-0 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        {/* Toogle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary p-1 rounded-lg flex justify-center"
        >
          {isOpen ? (
            <img
              className="w-7 transition-all duration-200"
              src={Cross}
              alt=""
            />
          ) : (
            <img
              className="w-7 transition-all duration-200"
              src={Menu}
              alt=""
            />
          )}
        </button>
        {/* NavLinks */}

        <nav
          className={` ${
            isOpen ? "" : "translate-x-full"
          } fixed right-0 top-[68px] flex flex-col items-center gap-6 bg-slate-50 py-12 min-w-[180px]
         text-black h-[calc(100vh-68px)] transition-all duration-300`}
        >
          {navLinks?.map((item) => {
            return (
              <div key={item?.id}>
                <NavLink
                  onClick={handleNavbar}
                  className={`inter text-md hover:bg-black hover:text-white transition-all duration-200 px-6 py-2 rounded-full
                     ${
                       item?.slug === location.pathname
                         ? "text-white bg-black"
                         : null
                     }`}
                  to={item?.slug}
                >
                  {item?.label}
                </NavLink>
              </div>
            );
          })}

          <Link to={"/cart"} onClick={handleNavbar}>
            <img
              className="text-white bg-black px-8 py-2 rounded-full"
              src={MobileCart}
              alt=""
            />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
