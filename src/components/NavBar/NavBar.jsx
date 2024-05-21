import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import CartList from "../CartList/CartList";

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
    <header className="bg-white border font-primary">
      <nav
        onClick={() => props.handleShow(false)}
        className="px-[23px] py-[41px] container mx-auto flex justify-between items-center"
      >
        <div className="w-[194px]">
          <a href="/" className="">
            <img src="/src/assets/logo/EyeGlass.png" alt="Logo" />
          </a>
        </div>

        {/* nav items for large devices */}
        <ul className="text-[#383838] text-[20px] font-normal leading-[30px] md:flex gap-[8px] hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* menu items for large devices */}
        <div className="lg:flex gap-5 items-center font-normal hidden justify-center w-[64px] h-[22px]">
          <div
            onClick={() => props.handleShow(true)}
            className="w-[22px] h-[22px] flex"
          >
            <div className="">
              <div>
                <Link to={CartList}>
                  <img src="/src/assets/logo/Vector (1).png" alt="Cart" />
                  <sup className="font-bold"> {props.count} </sup>
                </Link>
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

        {/* mobile button and display */}
        <div className="md:hidden font-primary">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-[22px] h-[22px]" />
            ) : (
              <FaBars className="w-[22px] h-[22px]" />
            )}
          </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
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
            <div className="flex items-center">
              <sup className="font-bold">3</sup>
              <a href="/shoppingcart">
                <img
                  className="w-[22px] h-[22px]"
                  src="/src/assets/logo/Vector (1).png"
                  alt="Cart"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a href="/">
                <img
                  width={22}
                  src="/src/assets/logo/Profile icon.png"
                  alt="Profile"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
