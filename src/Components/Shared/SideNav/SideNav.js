import React, { useState } from "react";
import { Link } from "react-router-dom";
import avater from "../../../Assets/img/profile/avater.png";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "w-24" : "w-62"
      } bg-primaryMain h-full rounded-r-lg`}
    >
      <section className="flex items-start justify-between p-4 gap-2">
        <div>
          <button onClick={toggle}>
            <img className="w-14" src={avater} alt="" />
          </button>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <p className="text-bold text-lg font-black">William</p>
          <p>Super Admin</p>
        </div>
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 23.0025H4C2.9 23.0025 2 22.1025 2 21.0025C2 19.9025 2.9 19.0025 4 19.0025H20C21.1 19.0025 22 19.9025 22 21.0025C22 22.1025 21.1 23.0025 20 23.0025ZM13.06 4.1925L16.81 7.9425L8.04 16.7125C7.86 16.9025 7.6 17.0025 7.34 17.0025H5C4.45 17.0025 4 16.5525 4 16.0025V13.6625C4 13.3925 4.11 13.1425 4.29 12.9525L13.06 4.1925ZM17.88 6.8725L14.13 3.1225L15.96 1.2925C16.35 0.9025 16.98 0.9025 17.37 1.2925L19.71 3.6325C20.1 4.0225 20.1 4.6525 19.71 5.0425L17.88 6.8725Z"
                fill="#37B6B6"
              />
            </svg>
          </button>
        </div>
      </section>
      {/* routres */}
      <section className="flex flex-col justify-start items-start p-4">
        {/* dashboard */}
        <div className="flex justify-start items-start pl-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
              fill="#6C6C6C"
            />
          </svg>
          <p className={`${isOpen ? "hidden" : "block"}`}>Dashboard</p>
        </div>
        {/* order */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 23.001H4C2.9 23.001 2 22.101 2 21.001C2 19.901 2.9 19.001 4 19.001H20C21.1 19.001 22 19.901 22 21.001C22 22.101 21.1 23.001 20 23.001ZM13.06 4.19104L16.81 7.94103L8.04 16.711C7.86 16.901 7.6 17.001 7.34 17.001H5C4.45 17.001 4 16.551 4 16.001V13.661C4 13.391 4.11 13.141 4.29 12.951L13.06 4.19104ZM17.88 6.87104L14.13 3.12104L15.96 1.29104C16.35 0.901035 16.98 0.901035 17.37 1.29104L19.71 3.63104C20.1 4.02104 20.1 4.65104 19.71 5.04104L17.88 6.87104Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Orders</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/processing">
                <p>Processing</p>
              </Link>
              <Link to="/pickedup">
                <p>Pickedup</p>
              </Link>
              <Link to="/delivered">
                <p>Delivered</p>
              </Link>
              <Link to="/cancelled">
                <p>Cancelled</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Delivery Man */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2C17 0.9 16.1 0 15 0H13C12.45 0 12 0.45 12 1C12 1.55 12.45 2 13 2H15V4.65L11.52 9H8V5C8 4.45 7.55 4 7 4H4C1.79 4 0 5.79 0 8V10C0 10.55 0.45 11 1 11H2C2 12.66 3.34 14 5 14C6.66 14 8 12.66 8 11H11.52C12.13 11 12.7 10.72 13.08 10.25L16.56 5.9C16.85 5.54 17 5.1 17 4.65V2ZM5 12C4.45 12 4 11.55 4 11H6C6 11.55 5.55 12 5 12Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M4 1H7C7.55 1 8 1.45 8 2C8 2.55 7.55 3 7 3H4C3.45 3 3 2.55 3 2C3 1.45 3.45 1 4 1Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M17 8C15.34 8 14 9.34 14 11C14 12.66 15.34 14 17 14C18.66 14 20 12.66 20 11C20 9.34 18.66 8 17 8ZM17 12C16.45 12 16 11.55 16 11C16 10.45 16.45 10 17 10C17.55 10 18 10.45 18 11C18 11.55 17.55 12 17 12Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Delivery Man</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/dmpending">
                <p>Pending Request</p>
              </Link>
              <Link to="/dmall">
                <p>All Delivery Man</p>
              </Link>
              <Link to="/dmadd">
                <p>Add New</p>
              </Link>
              <Link to="/dmblocked">
                <p>Blocked</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Customers */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Customers</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/processing">
                <p>Processing</p>
              </Link>
              <Link to="/cmall">
                <p>All Customers</p>
              </Link>
              <Link to="/cmblocked">
                <p>Blocked</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Locations */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.16113C7.8 2.16113 4 5.38113 4 10.3611C4 13.5411 6.45 17.2811 11.34 21.5911C11.72 21.9211 12.29 21.9211 12.67 21.5911C17.55 17.2811 20 13.5411 20 10.3611C20 5.38113 16.2 2.16113 12 2.16113ZM12 12.1611C10.9 12.1611 10 11.2611 10 10.1611C10 9.06113 10.9 8.16113 12 8.16113C13.1 8.16113 14 9.06113 14 10.1611C14 11.2611 13.1 12.1611 12 12.1611Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Locations</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/lcaddnew">
                <p>Add New Location</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Transaction */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 9H10C9.45 9 9 8.55 9 8C9 7.45 9.45 7 10 7H14C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M14 12H10C9.45 12 9 11.55 9 11C9 10.45 9.45 10 10 10H14C14.55 10 15 10.45 15 11C15 11.55 14.55 12 14 12Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H4C3.45 16 3 16.45 3 17V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM15 20H6C5.45 20 5 19.55 5 19V18H15V20ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V17C17 16.45 16.55 16 16 16H8V5H19V19Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7C16.4477 7 16 7.44772 16 8C16 8.55228 16.4477 9 17 9Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11C16 11.5523 16.4477 12 17 12Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Transaction</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/trpending">
                <p>Pending Withdraw</p>
              </Link>
              <Link to="/trunsettled">
                <p>Unsettled Balance</p>
              </Link>
              <Link to="/trrevenue">
                <p>Revenue</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Warehouse */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9977 9.62736V5.32736C18.9977 4.77736 18.5477 4.32736 17.9977 4.32736H16.9977C16.4477 4.32736 15.9977 4.77736 15.9977 5.32736V6.92736L12.6677 3.92736C12.2877 3.58736 11.7077 3.58736 11.3277 3.92736L2.96766 11.4574C2.62766 11.7574 2.83766 12.3274 3.29766 12.3274H4.99766V19.3274C4.99766 19.8774 5.44766 20.3274 5.99766 20.3274H8.99766C9.54766 20.3274 9.99766 19.8774 9.99766 19.3274V14.3274H13.9977V19.3274C13.9977 19.8774 14.4477 20.3274 14.9977 20.3274H17.9977C18.5477 20.3274 18.9977 19.8774 18.9977 19.3274V12.3274H20.6977C21.1577 12.3274 21.3777 11.7574 21.0277 11.4574L18.9977 9.62736ZM9.99766 10.3274C9.99766 9.22736 10.8977 8.32736 11.9977 8.32736C13.0977 8.32736 13.9977 9.22736 13.9977 10.3274H9.99766Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Warehouse</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/whall">
                <p>All Warehouse</p>
              </Link>
              <Link to="/whaddnew">
                <p>Add New Warehouse</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Staff */}
        <div class="collapse p-0 m-0">
          <input type="checkbox" />
          <div class="collapse-title">
            <div class="flex justify-start items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}>Staff</p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start">
              <Link to="/stall">
                <p>All Staff</p>
              </Link>
              <Link to="/staddnew">
                <p>Add New Staff</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Logout */}
        <div className="flex justify-start items-center pl-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.10449 5H11.1045C11.6545 5 12.1045 4.55 12.1045 4C12.1045 3.45 11.6545 3 11.1045 3H5.10449C4.00449 3 3.10449 3.9 3.10449 5V19C3.10449 20.1 4.00449 21 5.10449 21H11.1045C11.6545 21 12.1045 20.55 12.1045 20C12.1045 19.45 11.6545 19 11.1045 19H5.10449V5Z"
              fill="#6C6C6C"
            />
            <path
              d="M20.7545 11.65L17.9645 8.86C17.6445 8.54 17.1045 8.76 17.1045 9.21V11H10.1045C9.55449 11 9.10449 11.45 9.10449 12C9.10449 12.55 9.55449 13 10.1045 13H17.1045V14.79C17.1045 15.24 17.6445 15.46 17.9545 15.14L20.7445 12.35C20.9445 12.16 20.9445 11.84 20.7545 11.65Z"
              fill="#6C6C6C"
            />
          </svg>
          <p className={`${isOpen ? "hidden" : "block"}`}>Logout</p>
        </div>
      </section>
    </div>
  );
};

export default SideNav;
