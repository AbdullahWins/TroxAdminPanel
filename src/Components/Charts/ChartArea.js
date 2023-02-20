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
    <div className="overflow-x-auto overflow-y-hidden flex items-center justify-center">
      <AreaChart
        width={800}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="2"
          stroke="#CA4922"
          fill="#FD7C55"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#37B6B6"
          fill="#5FC5C5"
        />
      </AreaChart>
    </div>
  );
};

export default ChartArea;
