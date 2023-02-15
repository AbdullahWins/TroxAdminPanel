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
    <div className="overflow-auto">
      <BarChart
        width={800}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
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
    </div>
  );
};

export default ChartBar;
