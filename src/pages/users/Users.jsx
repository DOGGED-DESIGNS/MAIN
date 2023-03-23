import { Box } from "@mui/system";
import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidbar/Sidebar";

import "../../App.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const Users = ({ info, link }) => {
  return (
    <div>
      <div className="gridz">
        <div>
          <Sidebar />
        </div>

        <Box className=" t4 flex-grow-1">
          <Navbar />

          <Datatable info={info} link={link} />
        </Box>
      </div>
    </div>
  );
};

export default Users;
