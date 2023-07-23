

import { useNavigate } from "react-router-dom";
import CurrentUser from "../contexts/CurrentUser";
import { useContext } from "react";
import SetCurrentUser from "../contexts/SetCurrentUser";


export default function Toolbar() {
    const currentUser = useContext(CurrentUser);
    const setCurrentUser = useContext(SetCurrentUser);

    const navigate = useNavigate();

    function loginHandler(e) {
        navigate("/login");
    }

    function logoutHandler(e) {
        setCurrentUser("");
    }

    function signupHandler(e) {
        navigate("/signup");
    }



    return (
        <div className="toolbar-container">
            <div>
                <div className="message-container">Seed Academy</div>
            </div>
            <div>
                { currentUser ? <div className="message-container"> SignOut </div> : <div style={{display: "flex", gap: "10px"}}><div className="message-container" onClick={loginHandler}> Login </div><div className="message-container" onClick={signupHandler}>SignUp</div></div>}
            </div>
        </div>
    );
}