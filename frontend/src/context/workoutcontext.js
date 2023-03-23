import { useContext, createContext, Reducer, useReducer } from "react";
import { Reducework } from "../reducer/workoutreducer";

export const Workoutvariable = createContext();
const Workoutprovider = (prop) => {
  const [work, dispatch] = useReducer(Reducework, []);
  return (
    <Workoutvariable.Provider value={{ work, dist: dispatch }}>
      {prop.children}
    </Workoutvariable.Provider>
  );
};

export default Workoutprovider;
