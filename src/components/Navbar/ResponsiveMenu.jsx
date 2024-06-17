import React from "react";
import {
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuLinks } from "./Navbar";
import Logo from "../../assets/website/logo5.png";
const ResponsiveMenu = ({ showMenu , toggleMenu}) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[60%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <Link to="/" className="flex items-center gap-3">
        <img src={Logo} alt="" className="w-10" />
        <span className="text-base sm:text-xl font-semibold ">Enhanced Technologies</span>
      </Link>
      <div className="ml-3 mt-[-18rem]">
        <nav className="">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="mb-5 inline-block hover:text-primary transition-colors duration-300 flex items-center gap-4"
                  onClick={toggleMenu}
                >
                  {data.icon}
                  {data.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className="mb-5 inline-block hover:text-primary transition-colors duration-300 flex items-center gap-4"
                onClick={toggleMenu}
              >
                <FaUserCircle />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>Enhanced Technologies</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
