import React from "react";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import Tablez from "../table/Table";
import Widget from "../widget/Widget";

import "./Containerz.scss";

import "../../index.scss";

const Containerz = () => {
  return (
    <>
      <div className="  container gen cont-grid">
        <div>
          <Widget type="users" num="700" per="30" />
        </div>
        <div>
          <Widget type="orders" num="500" per="70" />
        </div>
        <div>
          <Widget type="earning" num="30,000" per="12" />
        </div>
        <div>
          <Widget type="balance" num="100,000" per="60" />
        </div>
      </div>
      <div className=" container">
        <div className=" featured-grid mt-4 ">
          <div>
            <Featured />
          </div>

          <div>
            <Chart aspect={2 / 1} title="user spending (Last 6(six) month)" />
          </div>
        </div>
        <div className=" mt-3 listContainer">
          <div className="listTitle  text-capitalize text-secondary ">
            <h5 className=" mb-4 text-secondary">Last Transaction</h5>
            <Tablez />
          </div>
        </div>
      </div>
    </>
  );
};

export default Containerz;
