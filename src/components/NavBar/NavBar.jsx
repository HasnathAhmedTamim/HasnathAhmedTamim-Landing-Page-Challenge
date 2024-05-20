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
    <header className="bg-white border  font-primary">
      <nav className="px-[23px] py-[41px] container mx-auto  flex justify-between items-center  ">
        <div className=" w-[194px]">
          <a href="/" className="">
            <img src="/src/assets/logo/EyeGlass.png" alt="" />
          </a>
        </div>

        {/* nav item for lg dev */}
        <ul className="text-[#383838] text-[20px] font-normal leading-[30px] md:flex gap-[8px] hidden">
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
        <div className="lg:flex gap-5 items-center font-normal hidden justify-center w-[64px] h-[22px] ">
          <div className="w-[22px] h-[22px]">
            <a href="/shopingcart">
              <img src="/src/assets/logo/Vector (1).png" alt="" />
            </a>
          </div>
          <div className="w-[22px] h-[22px]">
            <a href="/">
              <img width={22} src="/src/assets/logo/Profile icon.png" alt="" />
            </a>
          </div>
        </div>

        {/* mobile button and display */}
        <div className="md:hidden font-primary">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-[22px] h-[22px]"></FaXmark>
            ) : (
              <FaBars className="w-[22px] h-[22px]"></FaBars>
            )}
          </button>
        </div>
      </nav>

      {/* menu item only for mobile */}
      <div>
        <ul
          className={`text-[#383838] text-xl font-primary gap-7 md:hidden block space-y-4 px-4 py-6  mt-24 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-0 transition-all bg-white ease-out duration-150 "
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <>
              <li key={path}>
                {" "}
                <NavLink onClick={toggleMenu} to={path}>
                  {" "}
                  {link}{" "}
                </NavLink>{" "}
              </li>
            </>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar

