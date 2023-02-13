import React from "react";

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
      <section>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Sender</th>
                <th>Item</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>312512351</th>
                <td>Cy Ganderton</td>
                <td>Quality Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2235235235</th>
                <td>Hart Hagerty</td>
                <td>Desktop Technician</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>354654654</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>354654654</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>354654654</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>354654654</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>354654654</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OrdersChart;
