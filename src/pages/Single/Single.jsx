import { Box } from "@mui/system";
import React from "react";
import Containerz from "../../components/Containerz/Containerz";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidbar/Sidebar";

import { Button, Typography } from "@mui/material";
import "./Single.scss";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import Tablez from "../../components/table/Table";
// import "../../App.css";

const Single = () => {
  return (
    <div className="gridz ">
      <div>
        <Sidebar />
      </div>
      <Box className=" t4 flex-grow-1">
        <Navbar />

        <div className="single gen  container  px-0  ">
          <div className=" single__user mt-5 ">
            <div className=" single__user--inner pb-3 ">
              <div className=" pl-2  d-flex mb-4 ">
                <Typography
                  variant="h6"
                  className=" flex-grow-1 text-secondary "
                >
                  Information
                </Typography>
                <span className=" ">
                  {" "}
                  <Button variant="text" color="secondary">
                    edit
                  </Button>{" "}
                </span>
              </div>
              <div className=" d-flex ">
                <div className=" flex-grow-1 pl-4 mr-3 ">
                  <div className=" specialimg">
                    <img
                      className=" "
                      src="https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt="image"
                    />
                  </div>
                </div>
                <div className=" pr-4">
                  <Typography
                    variant="h5"
                    className="  mb-3 font-weight-bold text-black-50"
                  >
                    Uzoechi Jeremiah{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    className=" font-weight-bold mb-2 d-block text-black-50"
                  >
                    Email :{" "}
                    <span className=" font-weight-bold ml-2">
                      uzoechijerry @gmail.com
                    </span>
                  </Typography>
                  <Typography
                    variant="p"
                    className="font-weight-bold mb-2 d-block text-black-50"
                  >
                    Address :{" "}
                    <span className=" font-weight-bold ml-2">
                      xyz street, Lagos , Nigeria
                    </span>
                  </Typography>
                  <Typography
                    variant="p"
                    className="font-weight-bold mb-2 d-block text-black-50"
                  >
                    phone number :{" "}
                    <span className=" font-weight-bold ml-2">
                      +1 232 323 232
                    </span>
                  </Typography>
                  <Typography
                    variant="p"
                    className=" font-weight-bold mb-2 d-block text-black-50"
                  >
                    Country :{" "}
                    <span className=" font-weight-bold ml-2">USA</span>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 single__chart">
            <Chart aspect={3 / 1} title="user spending (Last 6(six) month)" />
          </div>
        </div>

        <div className=" mt-3 listContainer container">
          <div className="listTitle  text-capitalize text-secondary ">
            <h5 className=" mb-4 text-secondary">Last Transaction</h5>
            <Tablez />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Single;
