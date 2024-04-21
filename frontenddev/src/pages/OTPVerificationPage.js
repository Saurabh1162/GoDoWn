import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login_Icon from "../Icons/Profile_Login.png";

const OTPVerificationPage = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Auto-focus to next input field after a number is typed
    if (event.target.nextSibling && event.target.value) {
      event.target.nextSibling.focus();
    }
  };
  return (
    <section id="otp-verification">
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={Login_Icon} alt="OTP Verification"></img>
          </div>
          <form className="pt-6">
            <div className="flex justify-between space-x-2">
            {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-10 h-10 text-center form-control rounded bg-slate-100"
                  autoComplete="off"
                />
            ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link to="#"className="text-sm text-amber-500 hover:text-amber-700 hover:underline">
                Resend OTP
              </Link>
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 px-6 py-2 rounded-full hover:scale-105 transition-all"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default OTPVerificationPage