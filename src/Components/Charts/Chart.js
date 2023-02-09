import React from "react";
import ChartArea from "./ChartArea";
import ChartBar from "./ChartBar";
import ChartLine from "./ChartLine";

const Chart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 1100, amt: 2400 },
    { name: "Page B", uv: 200, pv: 1400, amt: 2100 },
    { name: "Page C", uv: 400, pv: 1800, amt: 1200 },
    { name: "Page D", uv: 100, pv: 1100, amt: 2300 },
    { name: "Page E", uv: 600, pv: 800, amt: 1400 },
    { name: "Page F", uv: 300, pv: 2100, amt: 900 },
    { name: "Page G", uv: 100, pv: 1700, amt: 2100 },
    { name: "Page H", uv: 800, pv: 1400, amt: 1100 },
  ];
  return (
    <div className="grid grid-cols-2 p-4 justify-around">
      <div>
        <ChartArea data={data}></ChartArea>
      </div>
      <div>
        <ChartBar data={data}></ChartBar>
      </div>
      <div>
        <ChartLine data={data}></ChartLine>
      </div>
    </div>
  );
};

export default Chart;
