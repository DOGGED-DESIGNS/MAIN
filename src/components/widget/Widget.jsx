import React from "react";
import {
  MoreVertIcon,
  MoreVertOutlined,
  UTurnLeftOutlined,
  Person,
  Wallet,
  WalletOutlined,
  Balance,
  MoneyOffCsredRounded,
  KeyboardArrowUp,
  ShoppingCartCheckoutOutlined,
  MonetizationOnOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";

import { useState, useEffect } from "react";

import "./Widget.scss";
import { Typography } from "@mui/material";

const Widget = ({ type, num, per }) => {
  const [varz, setVarz] = useState("");

  useEffect(() => {
    switch (type) {
      case "users":
        setVarz("#d3b2ffea");
        break;
      case "balance":
        setVarz("#fff7b2ea");
        break;
      case "orders":
        setVarz("#bfffb2ea");
        break;
      case "earning":
        setVarz("#ffb2bfea");
        break;
      default:
        setVarz("red");
    }
  }, []);

  return (
    <div className=" wed  ">
      <div
        className=" d-flex
      "
      >
        {" "}
        <Typography
          variant="h6"
          className=" flex-grow-1 text-capitalize text-secondary font-weight-bold"
        >
          {type}
        </Typography>{" "}
        <span>
          {" "}
          <KeyboardArrowUp sx={{ color: "green" }} /> {`${per}%`}
        </span>{" "}
      </div>
      <h4 className=" text-black-80 my-3 ">
        {(type === "earning" || type === "balance") && (
          <span
            className=" mr-2 text-success fontweight
        "
          >
            $
          </span>
        )}
        {num}
      </h4>
      <div>
        <span>
          <a
            style={{ cursor: "pointer" }}
            className=" text-decoration-none text-capitalize"
          >
            {" "}
            {`see all ${type}`}
          </a>
        </span>
        <span
          className="p-1"
          style={{
            background: varz,
            borderRadius: "4px",
          }}
        >
          {type === "orders" && (
            <ShoppingCartCheckoutOutlined style={{ color: "green" }} />
          )}
          {type === "users" && <Person style={{ color: "purple" }} />}
          {type === "earning" && (
            <MonetizationOnOutlined style={{ color: "red" }} />
          )}
          {type === "balance" && (
            <AccountBalanceWalletOutlined style={{ color: "#b8b804" }} />
          )}
        </span>
      </div>
    </div>
  );
};

export default Widget;
