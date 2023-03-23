import React from "react";

import "./Featured.scss";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVertOutlined,
} from "@mui/icons-material";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className=" mb-3 d-flex">
          <span className=" textuppercase text-secondary flex-grow-1 ">
            TOTAL REVENUE
          </span>

          <MoreVertOutlined />
        </div>
        <CircularProgressbar
          className="tests"
          value={70}
          text={"70%"}
          strokeWidth={6}
        />

        <p className=" lead text-capitalize text-center my-2">
          total sales made today
        </p>
        <h3 className=" text-capitalize text-center my-4">$420</h3>

        <p className=" text-secondary text-center">
          Previous transactions processing Last payments my not be included.
        </p>
        <div className=" d-flex justify-content-between mt-3">
          <div>
            <p
              className=" text-center
            "
            >
              Target
            </p>

            <div
              className=" d-flex 
            "
              style={{
                color: "red",
              }}
            >
              <KeyboardArrowDown sx={{ color: "red" }} />
              <p className=" text-center">$12.4k</p>
            </div>
          </div>
          <div>
            <p
              className=" text-center
            "
            >
              Last week
            </p>
            <div className=" d-flex" style={{ color: "green" }}>
              <KeyboardArrowUp className="" />
              <p className=" text-center">$12.4k</p>
            </div>
          </div>
          <div>
            <p
              className=" text-center
            "
            >
              Last Month
            </p>

            <div className=" d-flex" style={{ color: "green" }}>
              <KeyboardArrowUp />
              <p className=" text-center">$12.4k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
