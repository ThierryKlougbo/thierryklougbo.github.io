
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Frontpage from "./Frontpage";
import Projectpage from "./Projectpage";
import Header from "./partials/Header";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Contact from "./Contactpage";
import Pricing from "./Pricing";
import FloatingButton from "./partials/FloatingButton";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <FloatingButton />
            <Routes>
                <Route path="/" exact element={<Frontpage/>} />
                <Route path="/projects" element={<Projectpage/>} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/contactMe"} element={<Contact />} />
                <Route path={"/pricing"} element={<Pricing />}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
