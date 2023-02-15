import React from "react";
import orders from "../../Assets/json/orders.json";

const OrdersProcessing = () => {
  const ordersProcessing = orders;
  console.log(ordersProcessing);

  return (
    <div className="overflow-x-auto w-full py-10">
      <table className="table w-full">
        <thead>
          <tr className="font-bold text-3xl">
            <th className="bg-secondaryMainLightest text-bold">Serial</th>
            <th className="bg-secondaryMainLightest ">Order ID</th>
            <th className="bg-secondaryMainLightest ">Created</th>
            <th className="bg-secondaryMainLightest ">Customer</th>
            <th className="bg-secondaryMainLightest ">Total Amount</th>
            <th className="bg-secondaryMainLightest ">Pickup Address</th>
            <th className="bg-secondaryMainLightest ">Destination Address</th>
            <th className="bg-secondaryMainLightest ">Actions</th>
          </tr>
        </thead>
        {ordersProcessing.map((order, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th>{order.serial}</th>
                <td>{order.orderId}</td>
                <td>{order.created}</td>
                <th>{order.customer}</th>
                <th>{order.totalAmount}</th>
                <td>{order.pickupAddress}</td>
                <td>{order.destinationAddress}</td>
                <th>
                  <button className="btn btn-warning">click!</button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default OrdersProcessing;
