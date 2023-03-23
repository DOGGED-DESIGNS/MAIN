import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Genprovider from "./context/Genprovider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Genprovider>
    <App />
  </Genprovider>
);
