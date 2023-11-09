
import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log(email,password)
  };

  return ( 
    <div className="login">
      <div className="InnerBox">
        <h1 className="titleText">Login</h1>
        <div className="InputBoxes">
            <h3 className="inputTitle">Email</h3>
            <input type="text" className="userNameInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            /> 

        </div>
        <div className="InputBoxes">
            <h3 className="inputTitle">Password</h3>
            <input type="password" className="userNameInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className="styledBt loginButton" onClick={handleLogin}>Login</button>
        <h2>Or</h2>
        <button className="signupButton unstyledBt" 
        onClick={function(e){
          window.location.href='/signup'
        }} >Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
