import React from "react";
import HomeOrders from "../Tables/HomeOrders";

const OrdersChart = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <p className="text-2xl text-blackMid  font-bold">Orders</p>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-ghost bordered border-2 border-blackMid text-blackMid rounded-full">
            Today
          </button>
          <button className="btn btn-sm btn-ghost bordered border-2 border-blackMid text-blackMid rounded-full">
            Weekly
          </button>
          <button className="btn btn-sm btn-ghost bordered border-2 bg-primaryMain text-whiteHigh rounded-full">
            Monthly
          </button>
          <button className="btn btn-sm btn-ghost bordered border-2 border-blackMid text-blackMid rounded-full">
            Yearly
          </button>
        </div>
      </section>
      <section className="flex items-center justify-start gap-6 py-6">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </section>
      <HomeOrders></HomeOrders>
    </div>
  );
};

export default OrdersChart;
