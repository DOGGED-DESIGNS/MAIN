import { Box } from "@mui/material";
import { useContext } from "react";
import { cont } from "../../context/Genprovider";
import Containerz from "../../components/Containerz/Containerz";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidbar/Sidebar";

import "./Home.scss";

const Home = () => {
  const test = useContext(cont);

  console.log(test);
  return (
    <div className="gridz">
      <div>
        <Sidebar />
      </div>
      <Box className=" t4 flex-grow-1">
        <Navbar />
        <Containerz />
      </Box>
    </div>
  );
};

export default Home;
