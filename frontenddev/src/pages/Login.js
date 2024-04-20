import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Login_Icon from "../Icons/Profile_Login.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <section id="logim">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto ">
            <img src={Login_Icon}></img>
          </div>
          <form className="">
            <div className="grid ">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full h-full  outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setshowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={"/Forgot_Pass_Page"} className="block w-fit ml-auto hover:underline hover:text-red-700">Forgot Password</Link>
            </div>

            <button className="bg-amber-400 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
