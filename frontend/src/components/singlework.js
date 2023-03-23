// "id": 18,
// "exercise": "workout to the extent",
// "loads": "45kg",
// "email": "chiamaka@gmail.com",
// "reps": "50000",
// "time": "3 days ago"

import Drawanddeladd from "../hooks/Drawanddeladd";

import { useContext, useEffect } from "react";

import { Workoutvariable } from "../context/workoutcontext";
const Singlework = ({ id, exercise, loads, email, reps, time, setall }) => {
  const { work, dist } = useContext(Workoutvariable);

  const { Del, Draw, error } = Drawanddeladd();
  // const handleDel = (delz) => {
  //   dist({ type: "DELETE", payload: { id: delz } });
  // };
  useEffect(() => {
    const wr = setTimeout(() => {
      setall();
    }, 5000);

    return () => {
      clearTimeout(wr);
    };
  }, [setall]);
  return (
    <>
      <div className="card border shadow my-2">
        <div className="card-header">
          <h4 className="text-capitalize font-weight-bold text-info">
            {exercise}
          </h4>
        </div>
        <div className="card-body d-flex">
          <div className="flex-grow-1">
            <h6 className="my-3">
              <strong>Load(kg):{loads}</strong>
            </h6>
            <h6 className="my-3">
              <strong>Reps:{reps}</strong>
            </h6>
            <small>{time}</small>
          </div>

          <div>
            <button
              onClick={async (e) => {
                await Del(id);
                dist({ type: "DELETE", payload: { id: id } });
                setall(true, "workout deleted", "danger");
              }}
              className="btn btn-outline-danger"
            >
              <i className="font-weight-bold fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlework;
