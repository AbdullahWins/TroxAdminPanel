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
    <div className="overflow-x-auto">
      <AreaChart
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
    </div>
  );
};

export default ChartArea;
