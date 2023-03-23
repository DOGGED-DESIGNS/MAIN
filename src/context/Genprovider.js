import { createContext, useState } from "react";

export const cont = createContext();

const Genprovider = (prop) => {
  const [toggle, setToggle] = useState(false);

  const reset = () => {
    setToggle(!toggle);
  };

  return (
    <cont.Provider value={{ reset, toggle }}>{prop.children}</cont.Provider>
  );
};

export default Genprovider;
