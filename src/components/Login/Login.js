import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import logo from "../../images/logo2.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }

  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="text-center ">
      <img className="img-fluid" src={logo} alt="" />
      <div className="d-flex align-content-center justify-content-center p-5">
        <form onSubmit={handelSubmit} className="w-50 d-flex flex-column px-5">
          <input onBlur={handelEmail} type="email" placeholder="Email" />
          <input
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
          />
          <input className="submit-button" type="submit" value="Sign Up" />
          <button
            className="mt-3 btn btn-link"
            onClick={() => navigate("/signup")}
          >
            New to Food delivery? Sing up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
