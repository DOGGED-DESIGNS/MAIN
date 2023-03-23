import "./index.css";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Nav from "./components/nav";
import Singlework from "./components/singlework";
import HOme from "./pages/home";
import Sign from "./pages/signup";
import Login from "./pages/login";
import { useEffect, useRef, useState, useContext } from "react";
import Authcontext from "./hooks/authContext";
const App = () => {
  const { user, dispatch } = Authcontext();

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route
            exact
            path="/"
            element={user.user ? <HOme /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user.user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user.user ? <Sign /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
