import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const ChartArea = ({ data }) => {
  return (
    <AreaChart
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
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#CA4922"
        fill="#FD7C55"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#CA4922"
        fill="#AFE2E2"
      />
    </AreaChart>
  );
};

export default ChartArea;
