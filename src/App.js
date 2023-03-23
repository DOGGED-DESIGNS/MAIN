import Card from "@mui/material/Card";
import { Button, Container, List, TextField, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

import { userInputs, productInputs } from "./formSource";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Listz from "./pages/list/Listz";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Single from "./pages/Single/Single";
import Error from "./pages/Error/Error";
import New from "./pages/new/New";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="users">
            <Route
              index
              element={<Users info="ADD NEW USER" link="/users/new" />}
            />
            <Route path=":userid" element={<Single />} />
            <Route
              path="new"
              element={<New use={userInputs} title="add new users" />}
            />
          </Route>
          <Route path="product">
            <Route
              index
              element={<Users info="ADD NEW PRODUCT" link="/product/new" />}
            />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New use={productInputs} title="add new product" />}
            />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
