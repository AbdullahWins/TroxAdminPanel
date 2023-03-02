import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import TableComponent from "./TableComponent";

const Lalala = () => {
  const {orders} = useContext(AuthContext);
  const rows=orders;
  
  const cols = ["id", "name", "age"];
  return (
    <div>
      <TableComponent rows={rows} cols={cols} />
    </div>
  );
};

export default Lalala;
