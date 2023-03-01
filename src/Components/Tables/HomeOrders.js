import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const HomeOrders = () => {
  const { orders } = useContext(AuthContext);
  return (
    <section>
      <div className="overflow-x-auto overflow-y-auto max-h-64">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Created</th>
              <th>Customer</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => {
              return (
                <tr key={i}>
                  <th>{order?.order_id}</th>
                  <td>{order?.timestamp?.seconds}</td>
                  <td>{order?.sender_name}</td>
                  <td>{order?.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HomeOrders;
