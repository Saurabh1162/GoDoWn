import React, { useState }  from 'react'
import Login_Icon from "../Icons/Profile_Login.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from '../helpers/imageTobase64';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data,setData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword :'',
    ProfilePic:'',
    PhoneNo:'',
    Landmark:''
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

  const handleUploadPic = async (e)=>{
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)
        
        setData((preve)=>{
          return{
            ...preve,
            ProfilePic : imagePic
          }
        })
  }

  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <div>
            <img src={data.ProfilePic || Login_Icon} alt="Sign Up"></img>
          </div>
          <form>
            <label>
            <div className='text-xs bg-opacity-80
           bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
            Upload Photo
          </div>
          <input type='file' className='hidden' onChange={handleUploadPic}/>
            </label>
          </form>
          </div>
          <form className="pt-4">
            <div className="grid gap-y-4">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  placeholder="Enter your name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Email ID:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your Email ID"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Phone No.:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="tel"
                  name="PhoneNo"
                  value={data.PhoneNo}
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your Phone No."
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Landmark:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="Landmark"
                  value={data.Landmark}
                  required
                  onChange={handleOnChange}
                  placeholder="Enter a Landmark"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>

              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
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
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
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
          <p className="my-5">Already have an account? <Link to={"/login"} className="text-amber-500 hover:text-amber-700 hover:underline">Login</Link></p>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage