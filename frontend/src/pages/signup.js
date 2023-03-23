import Usesignup from "../hooks/useSignup";
import { useState, useEffect } from "react";
import Alert from "../components/alert";
import { Navigate, NavLink } from "react-router-dom";

import Authcontext from "../hooks/authContext";

const Sign = () => {
  const [email, setEmail] = useState("");

  const { user, dispatch } = Authcontext();

  const [pass, setPass] = useState("");
  const { loading, Sign, error } = Usesignup();

  // handling sumit
  const handleSubmit = (e) => {
    e.preventDefault();
    Sign(email, pass);
  };
  // end of handling submit
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div
              style={{ maxWidth: "500px" }}
              className=" shadow m-auto bg-white border card"
            >
              {error.status ? <Alert {...error} /> : null}

              <div className="card-header bg-info">
                <h2 className=" text-capitalize text-white">Sign up</h2>
              </div>
              <div className=" card-body">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-group my-3">
                    <label className=" label">email</label>
                    <input
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                      type="text"
                      className=" form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="form-group my-3">
                    <label className=" label">password:</label>
                    <input
                      onChange={(e) => {
                        setPass(e.currentTarget.value);
                      }}
                      type="text"
                      className=" form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="card-footer">
                    <button className=" btn-lg btn btn-outline-info text-capitalize">
                      {loading ? "please wait.." : "signup"}{" "}
                      <i className=" fa fa-user font-weight-bold"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
