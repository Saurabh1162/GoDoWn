import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login_Icon from "../Icons/Profile_Login.png";

const ForgotPassword = () => {
  return (
    <section id="forgot-password">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
        <div className="w-20 h-20 mx-auto ">
            <img src={Login_Icon}></img>
          </div>
          <form className="pt-4">
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
            <Link to={"/OTP_Page"}><button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-5">
              Send OTP
            </button></Link>
            
            <div className="grid ">
          <label>Mobile No. :</label>
          <div className="bg-slate-100 p-2">
                <input
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <Link to={"/OTP_Page"}><button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-5">
              Send OTP
            </button></Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
