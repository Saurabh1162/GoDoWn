import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Login_Icon from "../Icons/Profile_Login.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [data,setData] = useState({
    email: '',
    password: ''
  })
  const handleOnChange =(e)=>{
    const {name,value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  console.log("data Login ",data)

  
  return (
    <section id="logim">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto ">
            <img src={Login_Icon}></img>
          </div>
          <form className="pt-4" onSubmit={handleSubmit}>
            <div className="grid ">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
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
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
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
              <Link
                to={"/Forgot_Pass_Page"}
                className="block w-fit ml-auto hover:underline hover:text-amber-700 "
              >
                Forgot Password ?
              </Link>
            </div>

            <button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have account ?
            <Link
              to={"/Sign_up"}
              className="text-amber-500 hover:text-amber-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
