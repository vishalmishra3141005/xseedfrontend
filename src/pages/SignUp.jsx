import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HOSTNAME } from "../config/env";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState(false);

  async function signupHandler(e) {
    // e.preventDefault();

    if (password !== confPassword) {
      alert("both password should match");
      return;
    }
    // const api = `${HOSTNAME}/apis/signup`;

    const api = "http://127.0.0.1:3000/apis/signup";

    console.log(api);
    try {
      console.log(email);
      console.log(password);
      console.log(confPassword);

      const response = await fetch(api, {
        method: "POST",
        body: {
          email: email,
          password: password,
        },
      });

      console.log(response);

      const jsonData = await response.json();
      if ("error" in jsonData) {
        throw new Error("json Error");
      }
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-style"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input-style"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={(e) => setConfPassword(e.target.value)}
          className="input-style"
          placeholder="Confirm-Password"
          type="password"
        />
        <button onClick={signupHandler} className="button-style" type="button">
          SignUp
        </button>
        {error && <div className="error-style">Unable to Signup</div>}
      </div>
    </div>
  );
}
