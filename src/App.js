import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route index element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element= {<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
