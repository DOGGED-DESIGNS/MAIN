import { Box } from "@mui/material";
import React from "react";
import Containerz from "../../components/Containerz/Containerz";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidbar/Sidebar";

// import "./Home.scss";

const Login = () => {
  return (
    <div className="gridz">
      <div>
        <Sidebar />
      </div>
      <Box className=" t4 flex-grow-1">
        <Navbar />
        <Containerz />
      </Box>
    </div>
  );
};

export default Login;
