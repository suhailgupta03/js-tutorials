"use client";

import { login } from "@/actions/user";
import {useState} from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "500px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (e) => {
    setUsername(e.target.value); // setting up the username state
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value); // setting up the password state
  };

  const onSubmit = (e) => {
    e.preventDefault(); // stops the default form submission
    // and does not reload the page
    
    if(username && password) { // checking if username and password
        // have been entered by the user
        // if they have been entered by the user then 
        // call the server action to submit the username and password
        login(username, password)
            .then((response) => {
                if(response) {
                    alert("Login successful");
                }else {
                    alert("Login failed");
                }
            })
    }else {
        alert("Please enter username and password");
    }
  }

  return (
    <form style={formStyle}>
      <input type="text" placeholder="Username" onChange={onUserNameChange} />
      <input
        type="password"
        placeholder="Password"
        style={{
          marginTop: "10px",
        }}
        onChange={onPasswordChange}
      />
      <button
        type="submit"
        onClick={onSubmit}  // calling the onSubmit function
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
}
