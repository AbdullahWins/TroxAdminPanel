import React, { useState } from "react";
import orders from "../../Assets/json/orders.json";
import ConfirmationModal from "../../Components/Modals/ConfirmationModal";

const OrdersPickedup = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const ordersProcessing = orders;

  const handleCheckbox = (event) => {
    const selectedOrdersList = [...selectedOrders];
    if (event.target.checked) {
      selectedOrdersList.push(event.target.value);
    } else {
      const index = selectedOrdersList.indexOf(event.target.value);
      if (index > -1) {
        selectedOrdersList.splice(index, 1);
      }
    }
    setSelectedOrders(selectedOrdersList);
  };

  return (
    <div className="overflow-x-auto w-full py-10 pr-10">
      <div className="flex items-center justify-between p-4 bg-secondaryMain text-whiteHigh rounded-t-lg">
        <section className="flex items-center gap-4">
          <div>
            <p className="font-bold text-2xl">Orders</p>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-sm m-1">
                Customer User &nbsp; <i className="fa-solid fa-angle-down"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 text-blackMid rounded-box w-52"
              >
                <li>
                  <button>Customer User</button>
                </li>
                <li>
                  <button>Marchants</button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-sm m-1">
                All Types &nbsp; <i className="fa-solid fa-angle-down"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 text-blackMid rounded-box w-52"
              >
                <li>
                  <button>Local</button>
                </li>
                <li>
                  <button>Local Distance</button>
                </li>
                <li>
                  <button>International</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex items-center gap-4 w-2/5">
          <input
            className="p-3 w-full text-blackMid rounded-md border-none active:border-none"
            type="text"
            placeholder="&#x1F50D; Search"
          />
          <p>
            <button className="btn bg-whiteHigh hover:bg-whiteLow border-none rounded-full">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6415 3.35146C12.0115 1.72146 9.70148 0.781457 7.16148 1.04146C3.49148 1.41146 0.471476 4.39146 0.0614764 8.06146C-0.488524 12.9115 3.26148 17.0015 7.99148 17.0015C11.1815 17.0015 13.9215 15.1315 15.2015 12.4415C15.5215 11.7715 15.0415 11.0015 14.3015 11.0015C13.9315 11.0015 13.5815 11.2015 13.4215 11.5315C12.2915 13.9615 9.58148 15.5015 6.62148 14.8415C4.40148 14.3515 2.61148 12.5415 2.14148 10.3215C1.30148 6.44146 4.25148 3.00146 7.99148 3.00146C9.65148 3.00146 11.1315 3.69146 12.2115 4.78146L10.7015 6.29146C10.0715 6.92146 10.5115 8.00146 11.4015 8.00146H14.9915C15.5415 8.00146 15.9915 7.55146 15.9915 7.00146V3.41146C15.9915 2.52146 14.9115 2.07146 14.2815 2.70146L13.6415 3.35146Z"
                  fill="#37B6B6"
                />
              </svg>
            </button>
          </p>
        </section>
      </div>

      <div
        className={` ${
          selectedOrders.length < 1
            ? "hidden"
            : "flex items-center justify-start gap-4"
        } p-4 bg-whiteHigh`}
      >
        <button className="btn btn-sm border-none text-blackMid hover:text-whiteHigh bg-whiteLow">
          Select All
        </button>
        <label
          htmlFor="deletePopup"
          className="btn btn-sm border-none bg-primaryMain"
        >
          Delete
        </label>
      </div>

      <table className="table w-full">
        <thead>
          <tr className="font-bold text-center text-3xl">
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Serial
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Order ID
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Created
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Customer
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Total
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Pickup Address
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Destination Address
            </th>
            <th className="bg-secondaryMainLightest text-bold text-lg">
              Actions
            </th>
          </tr>
        </thead>
        {ordersProcessing.map((order, i) => {
          return (
            <tbody key={i}>
              <tr className="text-center">
                <th className="px-0">
                  <p className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={order.orderId}
                      onChange={handleCheckbox}
                    />
                    &nbsp; &nbsp;
                    {order.serial}
                  </p>
                </th>
                <td className="px-0">{order.orderId}</td>
                <td className="px-0">{order.created}</td>
                <td className="px-0">{order.customer}</td>
                <td className="px-0">${order.totalAmount}.00</td>
                <td className="px-0">{order.pickupAddress}</td>
                <td className="px-0">{order.destinationAddress}</td>
                <td className="px-0 py-0">
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="blockPopup"
                      className="btn rounded-full bg-whiteHigh text-primaryMain border-none hover:bg-whiteHigh"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2536 6.04355L17.6522 5.64491L17.2088 5.29674C15.7736 4.16987 13.9656 3.5 12 3.5C7.30386 3.5 3.5 7.30386 3.5 12C3.5 13.9656 4.16987 15.7736 5.29674 17.2088L5.64491 17.6522L6.04355 17.2536L17.2536 6.04355ZM6.74645 17.9564L6.3478 18.3551L6.79122 18.7033C8.22638 19.8301 10.0344 20.5 12 20.5C16.6961 20.5 20.5 16.6961 20.5 12C20.5 10.0344 19.8301 8.22638 18.7033 6.79122L18.3551 6.3478L17.9564 6.74645L6.74645 17.9564ZM2.5 12C2.5 6.75614 6.75614 2.5 12 2.5C17.2439 2.5 21.5 6.75614 21.5 12C21.5 17.2439 17.2439 21.5 12 21.5C6.75614 21.5 2.5 17.2439 2.5 12Z"
                          fill="black"
                          stroke="#797979"
                        />
                      </svg>
                    </label>

                    <label
                      htmlFor="pausePopup"
                      className="btn rounded-full bg-whiteHigh text-primaryMain border-none hover:bg-whiteHigh"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 19.5015H12.2071L15.2071 16.5015H19C19.8239 16.5015 20.5 17.1777 20.5 18.0015C20.5 18.8254 19.8239 19.5015 19 19.5015ZM3.64355 16.3151L12.0605 7.89816L15.1124 10.942L6.70191 19.3525C6.59727 19.4498 6.46935 19.5015 6.34 19.5015H4C3.72614 19.5015 3.5 19.2754 3.5 19.0015V16.6615C3.5 16.5356 3.55625 16.4024 3.64355 16.3151ZM18.3564 6.98508C18.5512 7.17981 18.5512 7.49323 18.3564 7.68797L16.88 9.16442L13.8371 6.12152L15.3136 4.64508C15.5083 4.45034 15.8217 4.45034 16.0164 4.64508L18.3564 6.98508Z"
                          fill="#F4A100"
                          stroke="#F4A100"
                        />
                      </svg>
                    </label>

                    <label
                      htmlFor="deletePopup"
                      className="btn rounded-full bg-whiteHigh text-primaryMain border-none hover:bg-whiteHigh"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
                          fill="#F4A100"
                        />
                      </svg>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {/* block modal popup */}
      <section>
        <input type="checkbox" id="blockPopup" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center justify-center gap-4">
            <div>
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM65 85H55V75H65V85ZM65 65H55V35H65V65Z"
                  fill="url(#paint0_linear_630_70960)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_630_70960"
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="110"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#37B6B6" />
                    <stop offset="1" stopColor="#37B6B6" stopOpacity="0.18" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg">Do you want to block?</p>
            </div>
            <div className="modal-action flex items-center justify-center">
              <label
                htmlFor="blockPopup"
                className="btn rounded-full bg-primaryMain border-primaryMain hover:text-primaryMain hover:bg-whiteHigh hover:border-primaryMain w-full"
              >
                Confirm
              </label>
              <label
                htmlFor="blockPopup"
                className="btn rounded-full bg-whiteHigh text-primaryMain w-full border-primaryMain hover:border-primaryMain hover:bg-whiteHigh"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* pause modal popup */}
      <section>
        <input type="checkbox" id="pausePopup" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center justify-center gap-4">
            <div>
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM65 85H55V75H65V85ZM65 65H55V35H65V65Z"
                  fill="url(#paint0_linear_630_70960)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_630_70960"
                    x1="60"
                    y1="10"
                    x2="60"
                    y2="110"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#37B6B6" />
                    <stop offset="1" stopColor="#37B6B6" stopOpacity="0.18" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg">Do you want to pause?</p>
            </div>
            <div className="modal-action flex items-center justify-center">
              <label
                htmlFor="pausePopup"
                className="btn rounded-full bg-primaryMain border-primaryMain hover:text-primaryMain hover:bg-whiteHigh hover:border-primaryMain w-full"
              >
                Confirm
              </label>
              <label
                htmlFor="pausePopup"
                className="btn rounded-full bg-whiteHigh text-primaryMain w-full border-primaryMain hover:border-primaryMain hover:bg-whiteHigh"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* delete modal popup */}
      <ConfirmationModal actionName="delete"></ConfirmationModal>
    </div>
  );
};

export default OrdersPickedup;
