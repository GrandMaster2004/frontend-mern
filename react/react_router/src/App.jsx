import { useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
            {/* <li><Link></Link></li> */}
          </ul>
        </nav>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<div>This page not Found</div>} />
        </Routes> */}

        {/* //lets say this is parents */}
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="*" element={<div>This page not Found</div>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
