import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo5.png";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaServicestack, FaInfoCircle, FaBriefcase } from "react-icons/fa";
import { useEffect } from "react";
export const MenuLinks = [
  {
    id: 1,
    name: "Services",
    link: "/#services",
    icon: <FaInfoCircle />,
  },
  // {
  //   id: 2,
  //   name: "A propos",
  //   link: "/#histoire",
  //   icon: <FaInfoCircle />,
  // },
  {
    id: 3,
    name: "Recrutement",
    link: "http://sibec.enhanced-tech.ma/operateur2/faces/inscriptions/NouvelEnreg.jsp;jsessionid=00E9D148C7F478331245EFAF1D1CA9D1",
    icon: <FaBriefcase />,
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0  z-10 w-full bg-white-20  backdrop-blur-md dark:bg-black-40 dark:text-white-20 duration-300">
      {/* <div
      className="fixed top-0 bg-white z-10 w-full dark:bg-black dark:text-white duration-300 
    "
    > */}
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="" className="w-10" />
            <span className="text-2xl sm:text-xl font-semibold">
              Enhanced Technologies
            </span>
          </Link>

          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 ">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <HashLink
                    smooth
                    to={link}
                    className="text-md lg:text-lg font-medium hover:text-primary transition-colors duration-500"
                    onClick={toggleMenu}
                  >
                    {name}
                  </HashLink>
                </li>
              ))}
              <Link to="/contact">
                <button className="primary-btn text-base ">
                  Contact
                </button>
              </Link>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
