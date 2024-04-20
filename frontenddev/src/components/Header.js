import React from "react";

import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="">
          <Link to={"/"}>
          <Logo w={200} h={65} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-4">
          <input
            type="text"
            placeholder="Search Products Here..."
            className="w-full outline-none "
          />
          <div className="text-lg w-13 bg-amber-400 min-w-[50px] h-8 flex items-center justify-center rounded-r-full cursor-pointer">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          <div className="text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-3xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-amber-400 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute top-5 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link to={"/login"}>
            <button className="px-3 py-1 bg-amber-400 rounded-full hover:bg-amber-500">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
