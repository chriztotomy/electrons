
import React, { useState } from "react";
import "./login.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="login">
      <div className="InnerBox">
        <h1 className="titleText">Sign Up</h1>
        <div className="InputBoxes">
            <h3 className="inputTitle">Name</h3>
            <input type="text" className="nameInput"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <div className="InputBoxes">
            <h3 className="inputTitle">Email</h3>
            <input type="text" className="userNameInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="InputBoxes">
            <h3 className="inputTitle">Password</h3>
            <input type="password" className="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="InputBoxes">
            <h3 className="inputTitle">Re-enter The Password</h3>
            <input type="password" className="passwordInput"
              onChange={(e) => {
                if (e.target.value !== password) {
                  e.target.setCustomValidity("Passwords Don't Match");
                  e.target.style.borderColor = "red";
                  e.target.style.borderWidth = "2px";
                } else {
                  e.target.setCustomValidity("");
                  e.target.style.borderColor = "transparent";
                }
              }}
            />
        </div>

        <button className="styledBt signUpButton">Sign Up</button>
        <button className="unstyledBt"
        onClick={
          function(){
          window.location.href='/login'
        }}>Back to Login</button>

      </div>
    </div>
  );
};

export default SignUp;
