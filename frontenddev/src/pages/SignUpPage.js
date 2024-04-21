import React, { useState }  from 'react'
import Login_Icon from "../Icons/Profile_Login.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={Login_Icon} alt="Sign Up"></img>
          </div>
          <form className="pt-4">
            <div className="grid gap-y-4">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Email ID:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email ID"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Phone No.:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone No."
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Landmark:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="landmark"
                  placeholder="Enter a Landmark"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <Link to={"/login"}>
            <button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Sign Up
            </button>
            </Link>
          </form>
          <p className="my-5">Already have an account? <Link to="/login" className="text-amber-500 hover:text-amber-700 hover:underline">Login</Link></p>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage