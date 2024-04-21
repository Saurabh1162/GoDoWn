import { createBrowserRouter } from "react-router-dom";

import App from "../../../frontenddev/src/App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUpPage from "../pages/SignUpPage";
import OTPVerificationPage from "../pages/OTPVerificationPage";

const router = createBrowserRouter([
    {
        path: "/",
         element: <App />,
         children : [
            {
                path : "",
                element : <Home />
            },
            {
                path :"login",
                element : <Login />
            },
            {
                path :"Forgot_Pass_Page",
                element : <ForgotPassword />
            },
            {
                path: "Sign_up",
                element : <SignUpPage />
            },
            {
                path :"OTP_Page",
                element : <OTPVerificationPage />
            }
         ]
    }
])

export default router 