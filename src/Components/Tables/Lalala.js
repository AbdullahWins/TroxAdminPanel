import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import TableComponent from "./TableComponent";

const Lalala = () => {
  const {orders} = useContext(AuthContext);
  const rows=orders;
  const rowss = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
    { id: 4, name: "Alice", age: 28 },
    { id: 5, name: "Tom", age: 33 },
    { id: 6, name: "Mary", age: 41 },
    { id: 7, name: "Ben", age: 23 },
    { id: 8, name: "Sara", age: 37 },
    { id: 9, name: "Mike", age: 45 },
    { id: 10, name: "Emily", age: 29 },
    { id: 11, name: "Chris", age: 34 },
    { id: 12, name: "Linda", age: 42 },
    { id: 13, name: "Steve", age: 26 },
    { id: 14, name: "Olivia", age: 38 },
    { id: 15, name: "Mark", age: 46 },
    { id: 16, name: "Rachel", age: 30 },
    { id: 17, name: "David", age: 35 },
    { id: 18, name: "Julia", age: 43 },
    { id: 19, name: "Matt", age: 27 },
    { id: 20, name: "Sophie", age: 39 },
    { id: 21, name: "Peter", age: 47 },
    { id: 22, name: "Lucy", age: 31 },
    { id: 23, name: "Adam", age: 36 },
    { id: 24, name: "Emma", age: 44 },
    { id: 25, name: "Max", age: 28 },
    { id: 26, name: "Hannah", age: 40 },
    { id: 27, name: "Sam", age: 48 },
    { id: 28, name: "Grace", age: 32 },
    { id: 29, name: "Kevin", age: 37 },
    { id: 30, name: "Ella", age: 45 },
    { id: 31, name: "Daniel", age: 29 },
    { id: 32, name: "Leah", age: 41 },
    { id: 33, name: "Eric", age: 49 },
    { id: 34, name: "Ava", age: 33 },
    { id: 35, name: "Nathan", age: 38 },
    { id: 36, name: "Chloe", age: 46 },
    { id: 37, name: "Tim", age: 30 },
    { id: 38, name: "Isabel", age: 42 },
    { id: 39, name: "Alex", age: 50 },
    { id: 40, name: "Grace", age: 34 },
    { id: 41, name: "Sarah", age: 39 },
    { id: 42, name: "Zach", age: 47 },
    { id: 43, name: "Victoria", age: 31 },
    { id: 44, name: "Mason", age: 36 },
    { id: 45, name: "Madison", age: 44 },
    { id: 46, name: "Jason", age: 28 },
    { id: 47, name: "Lily", age: 40 },
    { id: 48, name: "Frank", age: 48 },
    { id: 49, name: "Sophia", age: 32 },
    { id: 50, name: "Greg", age: 37 },
    { id: 51, name: "Julia", age: 45 },
    { id: 52, name: "Jack", age: 33 },
    { id: 53, name: "Lucy", age: 38 },
    { id: 54, name: "Max", age: 46 },
    { id: 55, name: "Sophia", age: 31 },
    { id: 56, name: "Tom", age: 35 },
    { id: 57, name: "Caroline", age: 43 },
    { id: 58, name: "Sean", age: 27 },
    { id: 59, name: "Emma", age: 39 },
    { id: 60, name: "Scott", age: 47 },
    { id: 61, name: "Hannah", age: 31 },
    { id: 62, name: "David", age: 36 },
    { id: 63, name: "Julie", age: 44 },
    { id: 64, name: "Alex", age: 28 },
    { id: 65, name: "Chloe", age: 40 },
    { id: 66, name: "Mike", age: 48 },
  ];

  const cols = ["id", "name", "age"];
  return (
    <div>
      <TableComponent rows={rows} cols={cols} />
    </div>
  );
};

export default Lalala;
