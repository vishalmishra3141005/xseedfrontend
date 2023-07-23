import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";

import CurrentUser from "./contexts/CurrentUser.js";




export default function App() {
  return (
    <div className="main-container">
      <CurrentUser.Provider value={""}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={ <Video /> } />
              <Route path="/login" element={ <Login /> } />
            </Routes>
          </BrowserRouter>
      </CurrentUser.Provider>
    </div>
  );
}
