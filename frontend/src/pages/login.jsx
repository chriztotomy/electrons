
import React, { useState } from "react";
import "./login.css";
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nutlagdufpfpezhovzqy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dGxhZ2R1ZnBmcGV6aG92enF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjQ2MTYsImV4cCI6MjAxNTIwMDYxNn0.ORhkozAiS7rfmuqgvyCOTREFwYTydOwQBolszpSg3ss')

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // handle login logic here
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    //on successful login set the data to local storage
    if (data) {
      if(localStorage.getItem("user") !== null){
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(data))
      }else{
        localStorage.setItem("user", JSON.stringify(data))
      }
      window.location.href = '/';
    }


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
