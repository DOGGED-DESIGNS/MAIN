import { useState, useEffect, useContext } from "react";
import { Workoutvariable } from "../context/workoutcontext";
import axios from "axios";
import Authcontext from "./authContext";

const Drawanddeladd = () => {
  const { work, dist } = useContext(Workoutvariable);
  const { user, dispatch } = Authcontext();
  const [error, setError] = useState({ status: false, message: "", color: "" });
  const [loading, setLoading] = useState(false);
  const Draw = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:7000/api/process",
        {
          message: "draw",
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            "content-type": "application/json",
            Authorization: `Bearer ${user.user.token}`,
          },
        }
      );

      dist({ type: "DRAW", payload: res.data.message });
      setLoading(false);
      return res.data.message;
    } catch (err) {
      setLoading(false);
    }
  };

  const Add = async (exercise, loads, reps) => {
    try {
      const res = await axios.post(
        "http://localhost:7000/api/process",
        {
          message: "add",
          exercise: exercise,
          loads: loads,
          reps: reps,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            "content-type": "application/json",
            Authorization: `Bearer ${user.user.token}`,
          },
        }
      );

      await Draw();

      setError({ status: true, message: "workout added", color: "success" });
      setTimeout(() => {
        setError({ status: false, message: "", color: "" });
      }, 5000);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const Del = async (idz) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:7000/api/process",
        {
          message: "deletework",
          id: idz,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            "content-type": "application/json",
            Authorization: `Bearer ${user.user.token}`,
          },
        }
      );

      dist({ type: "DELETE", payload: { id: idz } });
      setLoading(false);
      setError({ status: true, message: "workout deleted", color: "success" });

      // setting the time out
      setTimeout(() => {
        setError({ status: false, message: "", color: "" });
      }, 5000);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { Draw, Del, Add, error, loading };
};

export default Drawanddeladd;
