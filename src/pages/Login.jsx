import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUser from "../contexts/CurrentUser";
import { HOSTNAME } from "../config/env";

export default function Login() {
    
    const navigate = useNavigate();
    const currentUser = useContext(CurrentUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    if (currentUser) {
        navigate(-1);
    }

    function loginHandler(e) {
        console.log(email);
        console.log(password);

        (async function() {
            try {
                const response = await fetch(`${HOSTNAME}/api/login`, {
                    method: "POST",
                });
                try {
                    jsonData = await response.json();
                    useNavigate("/");
                } catch(err) {
                    setError(true);
                }
            } catch(err) {
                setError(true);
            }
        })();
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