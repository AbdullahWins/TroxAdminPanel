import React, { useState } from "react";
import { Link } from "react-router-dom";
import avater from "../../../Assets/img/profile/avater.png";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "w-24" : "w-72"
      } bg-whiteHigh h-full rounded-r-lg mt-10`}
    >
      <section className="flex items-start justify-between p-4 gap-2 bg-secondaryMainLightest rounded-tr-lg">
        <div>
          <img className="w-14" src={avater} alt="" />
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
      {/* routes */}
      <section className="flex flex-col justify-start items-start mt-2">
        {/* dashboard */}
        <div className="flex justify-start items-center p-3 bg-primaryMainLightest w-full text-primaryMain">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
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
                  d="M12 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM19 19H5V5H19V19Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p
                className={`${isOpen ? "hidden" : "block"} font-bold`}
              >
                Orders
              </p>
            </div>
          </div>
          <div class="collapse-content">
            <div class="flex flex-col justify-start items-start ">
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7C19 5.9 18.1 5 17 5H15C14.45 5 14 5.45 14 6C14 6.55 14.45 7 15 7H17V9.65L13.52 14H10V10C10 9.45 9.55 9 9 9H6C3.79 9 2 10.79 2 13V15C2 15.55 2.45 16 3 16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H13.52C14.13 16 14.7 15.72 15.08 15.25L18.56 10.9C18.85 10.54 19 10.1 19 9.65V7ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M6 6H9C9.55 6 10 6.45 10 7C10 7.55 9.55 8 9 8H6C5.45 8 5 7.55 5 7C5 6.45 5.45 6 6 6Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z"
                  fill="#6C6C6C"
                />
              </svg>

              <p className={`${isOpen ? "hidden" : "block"}`}> Delivery</p>
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
        <div className="flex justify-start items-center p-4 w-full">
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
        <hr />
        <div className="p-4 w-full rounded-br-xl">
          <button onClick={toggleSideNav} className="btn-btn-ghost">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.20312 18H15.2031C15.7531 18 16.2031 17.55 16.2031 17C16.2031 16.45 15.7531 16 15.2031 16H4.20312C3.65312 16 3.20312 16.45 3.20312 17C3.20312 17.55 3.65312 18 4.20312 18ZM4.20312 13H12.2031C12.7531 13 13.2031 12.55 13.2031 12C13.2031 11.45 12.7531 11 12.2031 11H4.20312C3.65312 11 3.20312 11.45 3.20312 12C3.20312 12.55 3.65312 13 4.20312 13ZM3.20312 7C3.20312 7.55 3.65312 8 4.20312 8H15.2031C15.7531 8 16.2031 7.55 16.2031 7C16.2031 6.45 15.7531 6 15.2031 6H4.20312C3.65312 6 3.20312 6.45 3.20312 7ZM20.5031 14.88L17.6231 12L20.5031 9.12C20.8931 8.73 20.8931 8.1 20.5031 7.71C20.1131 7.32 19.4831 7.32 19.0931 7.71L15.5031 11.3C15.1131 11.69 15.1131 12.32 15.5031 12.71L19.0931 16.3C19.4831 16.69 20.1131 16.69 20.5031 16.3C20.8831 15.91 20.8931 15.27 20.5031 14.88Z"
                fill="#6C6C6C"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SideNav;
