import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";

import { Workoutvariable } from "./workoutcontext";

export const Contextuser = createContext();
const SessionUserProvider = (prop) => {
  const { work, dist } = useContext(Workoutvariable);
  useEffect(() => {
    const list = localStorage.getItem("list");
    const list2 = JSON.parse(list);
    if (list) {
      dispatch({ type: "LOGIN", payload: list2 });
    }
  }, []);
  const addReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload };

      case "LOGOUT":
        localStorage.removeItem("list");
        dist({ type: "DRAW", payload: [] });
        return { user: null };
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(addReducer, { user: null });
  return (
    <Contextuser.Provider value={{ user: user, dispatch }}>
      {prop.children}
    </Contextuser.Provider>
  );
};

export default SessionUserProvider;
