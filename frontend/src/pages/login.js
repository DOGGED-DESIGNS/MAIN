import { useEffect, useContext, useState } from "react";
import Uselogin from "../hooks/useLogin";
import Authcontext from "../hooks/authContext";

import { Navigate } from "react-router-dom";

import Alert from "../components/alert";

const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const { user, dispatch } = Authcontext();

  const { loading, error, Logmein } = Uselogin();
  // this is the use login hook

  const handleSubmit = (e) => {
    e.preventDefault();

    Logmein(email, pass);
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div
              style={{ maxWidth: "500px" }}
              className=" shadow m-auto bg-white border card"
            >
              {error.status && <Alert {...error} />}

              <div className="card-header bg-info">
                <h2 className=" text-capitalize text-white">login</h2>
              </div>
              <div className=" card-body">
                <form action="">
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
                    <button
                      onClick={handleSubmit}
                      className=" btn-lg btn btn-outline-info text-capitalize"
                    >
                      {loading ? "please wait.." : "login"}{" "}
                      <i className=" fa fa-sign-in font-weight-bold"></i>
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

export default Login;
