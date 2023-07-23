

import CurrentUser from "../contexts/CurrentUser";
import { useContext } from "react";


export default function Toolbar() {
    const currentUser = useContext(CurrentUser);
    return (
        <div className="toolbar-container">
            <div>
                <p>Seed Academy</p>
            </div>
            <div>
                { currentUser ? <p> SignOut </p> : <p> Login </p>}
            </div>
        </div>
    );
}