import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggleMenu = () => setIsOpenMenu(false);
  console.log(isOpenMenu);
  return (
    <header className="padding-x py-8 absolute z-20 w-full   max-lg:bg-gray-600 opacity-90 max-lg:text-white max-lg:pb-12 max-lg:sticky top-0 ">
      <nav className="flex justify-between items-center max-container max-lg:relative">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px] max-lg:absolute top-0 max-lg:w-24"
          />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${
            isOpenMenu
              ? "max-lg:flex-col max-md:flex md:flex max-sm:flex text-white min-h-[400px] max-lg:transition-[height] duration-1000"
              : "max-h-0 max-lg:transition-[height]"
          } `}
        >
          {navLinks.map((item) => (
            <li key={item.label} onClick={toggleMenu}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg rounded-xl text-slate-gray max-lg:text-white transition-all hover:text-sm hover:bg-white lg:hover:bg-coral-red hover:text-black lg:hover:text-white duration-400 p-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          onClick={handleOpenMenu}
          className="hidden max-lg:block absolute top-0 right-0 cursor-pointer"
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
