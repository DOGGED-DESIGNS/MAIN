import { useContext, useEffect } from "react";

import { Contextuser } from "../context/usercontext";

const Authcontext = () => {
  const Context = useContext(Contextuser);

  if (!Context) {
    throw Error("user context not avialable in the component");
  }
  return Context;
};

export default Authcontext;
