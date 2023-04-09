import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <div className="text-white h-24 max-w-[1240px] mx-auto flex items-center justify-between">
      <h1 className="  w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="cursor-pointer p-4 ">Home</li>
        <li className="cursor-pointer p-4 ">Company</li>
        <li className="cursor-pointer p-4 ">Resources</li>
        <li className="cursor-pointer p-4 ">About</li>
        <li className="cursor-pointer p-4 ">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]  ease-in-out duration-500"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4">
          React.
        </h1>
        <li className="cursor-pointer	 p-4 border-b border-gray-600 ">Home</li>
        <li className="cursor-pointer	 p-4 border-b border-gray-600 ">
          Company
        </li>
        <li className="cursor-pointer	 p-4 border-b border-gray-600 ">
          Resources
        </li>
        <li className="cursor-pointer	 p-4 border-b border-gray-600 ">About</li>
        <li className="cursor-pointer	 p-4 ">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
