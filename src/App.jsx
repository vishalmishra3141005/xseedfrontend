import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import CurrentUser from "./contexts/CurrentUser.js";
import SetCurrentUser from "./contexts/SetCurrentUser.js";

import { useState } from "react";


export default function App() {

  const [currUser, setCurrUser] = useState("");

  return (
    <div className="main-container">
      <CurrentUser.Provider value={currUser}>
        <SetCurrentUser.Provider value={setCurrUser}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={ <Video /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/signup" element={ <SignUp /> } />
            </Routes>
          </BrowserRouter>
        </SetCurrentUser.Provider>
      </CurrentUser.Provider>
    </div>
  );
}
