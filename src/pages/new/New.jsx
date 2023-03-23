import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Containerz from "../../components/Containerz/Containerz";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidbar/Sidebar";

import "../../App.css";

import "./New.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ use, title }) => {
  const [file, setFile] = useState("");

  console.log(file);

  return (
    <div className="gridz">
      <div>
        <Sidebar />
      </div>
      <Box className=" t4 flex-grow-1">
        <Navbar />
        <div className=" container">
          <div className=" p-3 gen genbox" style={{ marginTop: "90px" }}>
            <Typography
              variant="h5"
              className=" text-secondary text-capitalize"
            >
              {" "}
              {title}
            </Typography>
          </div>

          <div className=" new  genbox p-3">
            <div className=" new__img mx-auto">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
              />
            </div>
            <div>
              <form>
                <div className=" new__grid">
                  <div className=" w-100">
                    <label htmlFor="file" style={{ cursor: "pointer" }}>
                      image: <DriveFolderUploadOutlined />{" "}
                    </label>
                    <input
                      className="d-none"
                      type={"file"}
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      id="file"
                    />
                  </div>

                  {use.map((u) => {
                    return (
                      <div key={u.id}>
                        <TextField
                          className=" w-100"
                          type={u.type}
                          placeholder={u.placeholder}
                          id="outlined-basic"
                          label={u.label}
                          variant="outlined"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="new__button">
                  <Button
                    className=" w-25 "
                    variant="contained"
                    type="submit"
                    color="secondary"
                    size="large"
                  >
                    submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default New;
