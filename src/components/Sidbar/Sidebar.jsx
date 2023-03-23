import * as React from "react";
import Box from "@mui/material/Box";

import {
  UTurnLeft,
  EqualizerOutlined,
  StorefrontOutlined,
  NotificationImportant,
  SettingsSystemDaydreamOutlined,
  NotificationImportantOutlined,
  AccountCircleOutlined,
  DashboardCustomizeOutlined,
  PortableWifiOffOutlined,
  DeliveryDiningOutlined,
  SellSharp,
  StoreOutlined,
  CreditCardOffOutlined,
  LocalShippingOutlined,
  InsertChartOutlined,
  ExitToAppOutlined,
  PsychologyOutlined,
  SettingsApplicationsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

import "./Sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { cont } from "../../context/Genprovider";

import "../../App.css";

const Sidebar = () => {
  const { toggle, reset } = useContext(cont);

  return (
    <div className={toggle ? "sidez  border" : "side border"}>
      <a href="/" className="text-decoration-none text-dark">
        <div className=" border"> DoggedAdmin </div>
      </a>
      <ul>
        <p className=" text-uppercase text-secondary font-weight-bold ">main</p>
        <a href="/" className="text-decoration-none text-dark">
          <li>
            {" "}
            <DashboardCustomizeOutlined className="ick" />{" "}
            <span className="text-capitalize">dashboard</span>
          </li>
        </a>
      </ul>
      <ul>
        <p className=" text-uppercase text-secondary font-weight-bold">LISTS</p>

        <a href="/users" className="text-decoration-none text-dark">
          <li>
            {" "}
            <PortableWifiOffOutlined className="ick" /> <span> Users</span>
          </li>
        </a>
        <a href="/product" className="text-decoration-none text-dark">
          <li>
            {" "}
            <StoreOutlined className="ick" /> <span> Product </span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <CreditCardOffOutlined className="ick" /> <span> Order</span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <LocalShippingOutlined className="ick" /> <span>Delivery</span>
          </li>
        </a>
      </ul>
      <ul>
        <p className=" text-uppercase text-secondary font-weight-bold">
          USEFUL
        </p>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <InsertChartOutlined className="ick" /> <span>Stats</span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <NotificationsOutlined className="ick" /> <span>Notification</span>
          </li>
        </a>
      </ul>

      <ul>
        <p className=" text-uppercase text-secondary font-weight-bold">
          SERVICES
        </p>

        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <SettingsSystemDaydreamOutlined className="ick" />{" "}
            <span> Stystem Health </span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <PsychologyOutlined className="ick" /> <span> Log </span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <SettingsApplicationsOutlined className="ick" />{" "}
            <span> Settings</span>
          </li>
        </a>
      </ul>

      <ul>
        <p className=" text-uppercase text-secondary font-weight-bold">USERS</p>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <AccountCircleOutlined className="ick" /> <span>Profile</span>
          </li>
        </a>
        <a className="text-decoration-none text-dark">
          <li>
            {" "}
            <ExitToAppOutlined className="ick" /> <span>Logout</span>
          </li>
        </a>
      </ul>
      <ul>
        <p className=" ml-2 text-capitalize font-weight-bold text-secondary ">
          Color Options
        </p>
        <div className=" themezz">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
