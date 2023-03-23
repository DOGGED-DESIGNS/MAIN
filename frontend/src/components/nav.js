import { NavLink } from "react-router-dom";
import Authcontext from "../hooks/authContext";
import { Workoutvariable } from "../context/workoutcontext";

import { useContext } from "react";

const Nav = () => {
  const { work, dist } = useContext(Workoutvariable);
  const { user, dispatch } = Authcontext();
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg navbar-light border">
        <a href="#" className="navbar-brand">
          <h2 className="text-capitalize text-secondary font-weight-bold">
            workout tracker
          </h2>
        </a>
        <button className="ml-auto navbar-toggler">
          <span
            data-target=".collapse"
            data-toggle="collapse"
            className="navbar-toggler-icon"
          ></span>
        </button>
        <div className="container">
          <div className="navbar-collapse collapse">
            <div className=" ml-auto">
              {user.user && (
                <span className="text-capitalize text-info lead">
                  {user.user.email}
                </span>
              )}
              {user.user && (
                <NavLink to={"/login"}>
                  <button
                    onClick={handleClick}
                    className=" mx-3 btn btn-outline-success text-capitalize"
                  >
                    LOGOUT <i className=" fa fa-sign-out font-weight-bold"></i>
                  </button>
                </NavLink>
              )}

              {!user.user && (
                <NavLink to={"/login"}>
                  <button className=" mx-3 btn btn-outline-info text-capitalize">
                    login <i className=" fa fa-user font-weight-bold"></i>
                  </button>
                </NavLink>
              )}
              {!user.user && (
                <NavLink to={"/signup"}>
                  <button className=" mx-3 btn btn-outline-success text-capitalize">
                    signup <i className=" fa fa-sign-in font-weight-bold"></i>
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
