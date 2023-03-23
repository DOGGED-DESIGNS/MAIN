import { useState, useContext } from "react";
import { Contextuser } from "../context/usercontext";
import axios from "axios";
import Authcontext from "./authContext";

import Sign from "../pages/signup";

const Usesignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "", color: "" });

  const setChange = (stat = false, message = "", color = "") => {
    setError({
      status: stat,
      message: message,
      color: color,
    });
  };

  const { user, dispatch } = Authcontext();

  const Sign = async (email, pass) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:7000/api/signup",
        {
          email: email,
          password: pass,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            "content-type": "application/json",
          },
        }
      );

      setLoading(false);

      dispatch({ type: "LOGIN", payload: res.data });
      localStorage.setItem("list", JSON.stringify(res.data));
    } catch (err) {
      setLoading(false);
      setChange(true, err.response.data.error, "danger");

      setTimeout(() => {
        setChange();
      }, 5000);
    }
  };
  return { Sign, loading, error };
};

export default Usesignup;
