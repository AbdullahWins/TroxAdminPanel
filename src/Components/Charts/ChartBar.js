import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ChartBar = ({ data }) => {
  return (
    <BarChart
    width={800}
    height={550}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#FD7C55" />
      <Bar dataKey="uv" fill="#AFE2E2" />
    </BarChart>
  );
};

export default ChartBar;
