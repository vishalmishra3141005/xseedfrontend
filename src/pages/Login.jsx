import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import SetCurrentUser from "../contexts/SetCurrentUser";

import { HOSTNAME } from "../config/env";

export default function Login() {
    
    const navigate = useNavigate();

    // const currentUser = useContext(CurrentUser);
    const setCurrentUser = useContext(SetCurrentUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    async function loginHandler(e) {
        e.preventDefault();
        const api = `${HOSTNAME}/apis/login`;
        console.log(api);
        try {
            const response = await fetch(api, {
                method: "POST",
                body: {
                    email: email,
                    password: password,
                },
            });
            const jsonData = await response.json();
            if ("error" in jsonData) {
                throw new Error("json Error");
            }
            setCurrentUser(email);
        } catch(err) {
            setError(true);
        }
    }

    return (
        <div className="login-container">
            <form className="form-container">
                <input onChange={(e) => setEmail(e.target.value)} className="input-style" placeholder="Email" type="email" />
                <input onChange={(e) => setPassword(e.target.value) } className="input-style" placeholder="Password" type="password" />
                <button onClick={loginHandler} className="button-style" type="submit">Login</button>
                { error && <div className="error-style">Unable to Login</div>}
            </form>
        </div>
    );
}