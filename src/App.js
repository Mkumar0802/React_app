import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import Otprestpassword from "./Otprestpassword";
import Home from "./Home";
import Todo from "./Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo/>} />
          {/* <Route path="/" element={<SignInForm />} /> */}
          {/* <Route index element={<SignInForm />} /> */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element= {<ResetPassword/>} />
          <Route path="/otprest" element= {<Otprestpassword/>} />
          <Route path="/home" element= {<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
