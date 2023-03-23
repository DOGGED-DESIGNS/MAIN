import React from "react";
import "./Datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import "./Datatable.scss";

import { userColumns, userRows } from "../../datatablesource";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../index.scss";

const Datatable = ({ info, link }) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div>
            <NavLink to={"/users/12"}>
              <Button size="small" className=" mx-1" variant="outlined">
                {" "}
                view{" "}
              </Button>
            </NavLink>
            <Button
              size="small"
              className=" mx-1"
              variant="outlined"
              color="error"
            >
              {" "}
              delete{" "}
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" container gen">
      <div className=" p-3 genbox" style={{ marginTop: "80px" }}>
        <NavLink to={link}>
          <Button className=" ml-auto d-block" variant="contained">
            {info}
          </Button>
        </NavLink>
      </div>
      <div className=" datatable">
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
