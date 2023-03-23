import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

const Tablez = () => {
  const rows = [
    {
      id: 11223,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "online payment",
      status: "Approved",
    },
    {
      id: 112113,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 11220,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      customer: " John Smith",
      date: "1 March",
      amount: 785,

      method: "online payment",
      status: "Pending",
    },
    {
      id: 11220,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      customer: " John Smith",
      date: "1 March",
      amount: 785,

      method: "online payment",
      status: "Passive",
    },
  ];

  return (
    <div className="tablez">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className=" text-center">Tracking Id</TableCell>
              <TableCell className="tableCell text-center font-weight-bold  ">
                Product
              </TableCell>
              <TableCell className="tableCell text-center font-weight-bold ">
                Customer
              </TableCell>
              <TableCell className=" text-center tableCell font-weight-bold ">
                Date
              </TableCell>
              <TableCell className=" text-center tableCell font-weight-bold ">
                Amount
              </TableCell>
              <TableCell className=" text-center tableCell font-weight-bold ">
                Payment Method
              </TableCell>
              <TableCell className=" text-center tableCell font-weight-bold ">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className=" text-center"
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell className=" text-center">{row.product}</TableCell>
                  <TableCell align="right">
                    <div className=" tablezz  align-items-center justify-content-center ">
                      <div className=" table-img">
                        <img className="  " src={`${row.img}`} />
                      </div>
                      <p className=" ml-1 font-weight-bold text-secondary ">
                        {row.customer}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className=" text-center">{row.date}</TableCell>
                  <TableCell className=" text-center">{row.amount}</TableCell>
                  <TableCell className=" text-center">{row.method}</TableCell>
                  <TableCell className={``}>
                    {" "}
                    <p className={`text-center ${row.status}`}>{row.status}</p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tablez;
