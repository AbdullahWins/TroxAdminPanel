import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../../Contexts/OrdersContext/OrdersProvider";

const OrderEdit = () => {
  const { id } = useParams();
  const { orderToEdit, fetchSingleOrder } = useContext(OrderContext);

  useEffect(() => {
    fetchSingleOrder(id);
  }, []);

  const handleEditBtn = (event) => {
    event.preventDefault();
    const orderId = id;
    const form = event.target;
    const senderName = form.senderName.value;
    const recieverName = form.recieverName.value;
    console.log(orderToEdit, orderId, senderName, recieverName);
  };

  return (
    <section className="w-full mt-10 mr-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center bg-secondaryMain text-whiteHigh rounded-t-lg w-full">
          <h2 className="p-4">Edit</h2>
        </div>
        <p>Edit the order :{id}</p>
        <form
          className="flex flex-col w-full items-center justify-center gap-2"
          onSubmit={handleEditBtn}
        >
          <input
            type="text"
            name="senderName"
            defaultValue={orderToEdit?.sender_name}
            placeholder="enter full name"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="text"
            name="senderPhone"
            defaultValue={orderToEdit?.sender_contact}
            placeholder="sender's phone number"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="text"
            name="senderAddress"
            defaultValue={orderToEdit?.sender_address}
            placeholder="sender's address"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="text"
            name="recieverName"
            defaultValue={orderToEdit?.receiver_name}
            placeholder="enter full name"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="text"
            name="recieverPhone"
            defaultValue={orderToEdit?.receiver_contact}
            placeholder="reciever's phone number"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="text"
            name="recieverAddress"
            defaultValue={orderToEdit?.receiver_address}
            placeholder="sender's address"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="number"
            name="percelWeight"
            defaultValue={orderToEdit?.parcel_weight}
            placeholder="enter weight in kg"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="number"
            name="deliveryFee"
            defaultValue={orderToEdit?.price}
            placeholder="delivery fee amount"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="number"
            name="discount"
            defaultValue={orderToEdit?.receiver_name}
            placeholder="discount"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <input
            type="number"
            name="totalAmount"
            defaultValue={orderToEdit?.receiver_name}
            placeholder="total amount"
            className="input bg-whiteLow border-none focus:outline-none w-full font-bold"
          />
          <button
            onClick={() => {
              fetchSingleOrder(id);
            }}
            className="btn normal-case"
          >
            {/* <img className="w-12" src={loginBtn} alt="login button" /> */}
            Done
          </button>
        </form>

        <p>Edit the order :{orderToEdit?.order_id}</p>
      </div>
    </section>
  );
};

export default OrderEdit;
