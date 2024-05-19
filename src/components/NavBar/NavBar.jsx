import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen , setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!isMenuOpen);
    }
    const navItems = [
      { path: "/", link: "Home" },
      { path: "/aboutus", link: "About Us" },
      { path: "/products", link: "Products" },
      { path: "/features", link: "Features" },
      { path: "/reviews", link: "Reviews" },
      { path: "/contactus", link: "Contact Us" },
    ];


  return (
    <header className="bg-white border fixed top-0 left-0 right-0 font-primary">
      <nav className="px-24 py-7 max-w-12xl mx-auto  flex justify-between items-center gap-2 ">
        <a href="/" className="">
          <img src="/src/assets/logo/EyeGlass.png" alt="" />
        </a>

        {/* nav item for lg dev */}
        <ul className="text-[#383838] text-xl md:flex gap-7 hidden">
          {navItems.map(({ path, link }) => (
            <>
              <li key={path}>
                {" "}
                <NavLink to={path}> {link} </NavLink>{" "}
              </li>
            </>
          ))}
        </ul>

        {/* menu item */}
        <div className="lg:flex gap-5 items-center hidden">
          <a href="/">
            <img src="/src/assets/logo/Vector (1).png" alt="" />
          </a>
          <a href="/">
            <img src="/src/assets/logo/Profile icon.png" alt="" />
          </a>
        </div>

        {/* mobile button and display */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark></FaXmark>
            ) : (
              <FaBars className="w-5 h-5"></FaBars>
            )}
          </button>
        </div>
      </nav>

      {/* menu item only for mobile */}
      <div>
        <ul
          className={`text-[#383838] text-xl  gap-7 md:hidden block space-y-4 px-4 py-6  mt-24 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-0 transition-all ease-out duration-150":"hidden"}`}
        >
          {navItems.map(({ path, link }) => (
            <>
              <li key={path}>
                {" "}
                <NavLink onClick={toggleMenu} to={path}> {link} </NavLink>{" "}
              </li>
            </>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar

