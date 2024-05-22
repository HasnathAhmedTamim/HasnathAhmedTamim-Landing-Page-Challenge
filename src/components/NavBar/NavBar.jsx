import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/aboutus", link: "About Us" },
    { path: "/products", link: "Products" },
    { path: "/features", link: "Features" },
    { path: "/reviews", link: "Reviews" },
    { path: "/contactus", link: "Contact Us" },
  ];

  return (
    <header className="bg-white border font-primary fixed top-0 left-0 w-full z-50">
      <nav className="px-[90px] py-[30px] flex justify-between items-center w-full">
        <div className="w-[194px]">
          <a href="/">
            <img src="https://i.ibb.co/T4vXLpW/EyeGlass.png" alt="Logo" />
          </a>
        </div>

        <ul className="text-[#383838] text-[20px] font-normal leading-[30px] md:flex lg:w-[581px] lg:h-[30px] lg:gap-[30px] gap-2 hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:flex w-[194px] gap-1 lg:gap-5 items-center font-normal hidden justify-end">
          <div className="w-[22px] h-[22px] flex">
            <div className="cursor-pointer" onClick={props.toggleModal}>
              <div className="flex">
                <img src="/src/assets/logo/Vector (1).png" alt="Cart" />
                {props.count > 0 && (
                  <sup className="font-bold"> {props.count} </sup>
                )}
              </div>
            </div>
          </div>

          <div className="w-[22px] h-[22px]">
            <a href="/">
              <img
                width={22}
                src="/src/assets/logo/Profile icon.png"
                alt="Profile"
              />
            </a>
          </div>
        </div>

        <div className="md:hidden font-primary">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaTimes className="w-[22px] h-[22px]" />
            ) : (
              <FaBars className="w-[22px] h-[22px]" />
            )}
          </button>
        </div>
      </nav>

      <ul
        className={`text-[#383838] text-xl font-primary gap-7 space-y-4 px-4 py-6 mt-24 bg-white md:hidden ${
          isMenuOpen ? "fixed top-0 left-0 w-full h-full z-50" : "hidden"
        } transition-all ease-out duration-150`}
      >
        {navItems.map(({ path, link }) => (
          <li key={path}>
            <NavLink onClick={toggleMenu} to={path}>
              {link}
            </NavLink>
          </li>
        ))}
        <li className="flex justify-between items-center mt-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={props.toggleModal}
          >
            {props.count > 0 && <sup className="font-bold">{props.count}</sup>}
            <a href="/shoppingcart">
              <img
                className="w-[22px] h-[22px]"
                src="https://i.ibb.co/0VcbsRp/Vector-1.png"
                alt="Cart"
              />
            </a>
          </div>
          <div className="flex items-center">
            <a href="/">
              <img
                width={22}
                src="https://i.ibb.co/FqRgVVF/Profile-icon.png"
                alt="Profile"
              />
            </a>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
