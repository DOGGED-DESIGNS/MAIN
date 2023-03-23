import axios from "axios";

import { useState, useContext } from "react";
import { Contextuser } from "../context/usercontext";

import Authcontext from "./authContext";

const Uselogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "", color: "" });
  const { user, dispatch } = Authcontext();

  const setChange = (stat = false, message = "", color = "") => {
    setError({
      status: stat,
      message: message,
      color: color,
    });
  };

  const Logmein = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:7000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            "content-type": "application/json",
          },
        }
      );

      dispatch({ type: "LOGIN", payload: res.data });
      localStorage.setItem("list", JSON.stringify(res.data));

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setChange(true, err.response.data.error, "danger");

      setTimeout(() => {
        setChange();
      }, 4000);
    }
  };
  return { loading, error, Logmein };
};

export default Uselogin;
