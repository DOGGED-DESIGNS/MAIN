import { useContext, useEffect, useState } from "react";
import { Workoutvariable } from "../context/workoutcontext";
import Drawz from "../hooks/Drawanddeladd";
import Singlework from "../components/singlework";
import Authcontext from "../hooks/authContext";
import Uselogin from "../hooks/useLogin";
import Alert from "../components/alert";
// import SessionUserProvider from "../context/usercontext";

const HOme = () => {
  const { Logmein } = Uselogin();
  const { user, dispatch } = Authcontext();
  const { work, dist } = useContext(Workoutvariable);
  const [me, setMe] = useState(false);
  // adding workout
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [loads, setLoads] = useState("");
  const [del, setDel] = useState({ status: false, message: "", color: "" });

  // end of adding workout

  const { Draw, error, Add, Del, loading } = Drawz();

  const setAll = (status = false, message = "", color = "") => {
    setDel({
      status: status,
      message: message,
      color: color,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await Add(exercise, loads, reps);
  };

  useEffect(() => {
    Draw();
  }, [dist]);

  return (
    <>
      <div className="container pt-5">
        {error.status && <Alert {...error} />}
        {del.status && <Alert {...del} />}
        <div className="row">
          <div className="col-sm-8 p-4">
            {work?.map((wa) => {
              return <Singlework {...wa} setall={setAll} key={wa.id} />;
            })}
          </div>
          <div className="col-sm-4 p-4">
            <h4 className="font-weight-bold text-capitalize">
              Add a new workout
            </h4>
            <form action="" className="bg-white" onSubmit={handleAdd}>
              <div className="form-group my-4">
                <label className="font-weight-bold text-capitalize text-secondary">
                  exercise Title:
                </label>
                <input
                  onChange={(e) => {
                    setExercise(e.currentTarget.value);
                  }}
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group my-4">
                <label className="font-weight-bold text-capitalize text-secondary">
                  Load(in kg):
                </label>
                <input
                  onChange={(e) => {
                    setLoads(e.currentTarget.value);
                  }}
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group my-4">
                <label className="font-weight-bold text-capitalize text-secondary">
                  Reps:
                </label>
                <input
                  onChange={(e) => {
                    setReps(e.currentTarget.value);
                  }}
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                />
              </div>
              <button className="mt-4 btn btn-outline-success text-capitalize">
                Add workout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOme;
