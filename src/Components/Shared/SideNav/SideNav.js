import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import avater from "../../../Assets/img/profile/avater.png";

const SideNav = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [canShow, setCanShow] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");

  // const navigate = useNavigate();

  const toggleSideNav = () => {
    setIsClosed(!isClosed);
    setCanShow(!canShow);
    // setTimeout(() => {
    //   setCanShow(!canShow);
    // }, 100);
  };

  // const openSideNav = (e) => {
  //   setIsClosed(false);
  // };

  const handleMouseEnter = () => {
    setIsClosed(false);
    setTimeout(() => {
      setCanShow(false);
    }, 150);
  };
  const handleMouseLeave = () => {
    setIsClosed(true);
    setCanShow(true);
  };

  const activateMenu = (index) => {
    setIsActive(index);
  };

  // const handleNavigation = (navRoute) => {
  //   const navigationRoute = `/${navRoute}`;
  //   navigate(navigationRoute, { replace: true });
  //   activateMenu(navRoute);
  // };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        isClosed ? "w-20" : "w-72"
      } bg-whiteHigh flex flex-col gap-1 h-full mt-10 rounded-r-lg sideNav overflow-x-auto`}
    >
      {/* user area */}
      <section
        className={`flex items-center justify-between p-3 gap-2 bg-secondaryMainLightest rounded-tr-lg`}
      >
        <div className="min-w-12">
          <img className="w-12" src={avater} alt="" />
        </div>
        <div
          className={`${
            canShow ? "hidden" : "block"
          } flex items-center justify-between gap-4 overflow-auto`}
        >
          <div>
            <p className="font-black">William</p>
            <p className="text-sm">Super Admin</p>
          </div>
          <div>
            <button onClick={toggleSideNav} className="btn-btn-ghost">
              <svg
                width="36"
                height="36"
                viewBox="0 0 32 32"
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
        </div>
      </section>
      {/* routes */}
      <section className="flex flex-col justify-start items-start gap-1">
        {/* dashboard */}
        <div
          onClick={() => activateMenu("dashboard")}
          className={`p-3 w-full ${
            isActive === "dashboard"
              ? "bg-primaryMainLightest text-primaryMain"
              : ""
          }`}
        >
          <Link
            className={`flex items-center ${
              isClosed ? "justify-center" : "justify-start pl-2"
            }`}
            to="/"
          >
            <span class="material-symbols-outlined text-blackMid">
              dashboard
            </span>
            <p className={`${canShow ? "hidden" : "block"}`}>Dashboard</p>
          </Link>
        </div>
        {/* order */}
        <div
          onClick={() => activateMenu(2)}
          className={`collapse ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 2 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">
                list_alt
              </span>{" "}
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                } flex items-center justify-between w-full`}
              >
                <span>Orders</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8">
              {/* <button
                onClick={() => handleNavigation("ordersProcessing")}
                className={`p-3 w-full ${
                  isActive === "ordersProcessing"
                    ? "bg-primaryMainLightest text-primaryMain"
                    : ""
                }`}
              >
                change route
              </button> */}
              <Link className="w-full" to="/ordersprocessing">
                <p>Processing</p>
              </Link>
              <Link className="w-full" to="/orderspickedup">
                <p>Pickedup</p>
              </Link>
              <Link className="w-full" to="/ordersdelivered">
                <p>Delivered</p>
              </Link>
              <Link className="w-full" to="/orderscancelled">
                <p>Cancelled</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Delivery Man */}
        <div
          onClick={() => activateMenu(3)}
          className={`collapse ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 3 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">
                directions_bike
              </span>
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                } flex items-center justify-between w-full`}
              >
                <span>Delivery Man</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8">
              <Link className="w-full" to="/deliveryPendingRequests">
                <p>Pending Request</p>
              </Link>
              <Link className="w-full" to="/deliveryAllDeliveryMan">
                <p>All Delivery Man</p>
              </Link>
              <Link className="w-full" to="/deliveryAddNew">
                <p>Add New</p>
              </Link>
              <Link className="w-full" to="/deliveryBlocked">
                <p>Blocked</p>
              </Link>
              <Link className="w-full" to="/deliveryCancelled">
                <p>Cancelled</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Customers */}
        <div
          onClick={() => activateMenu(4)}
          className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 4 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">
                person
              </span>{" "}
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                }  flex items-center justify-between w-full`}
              >
                <span>Customer</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
              <Link className="w-full" to="/customerProcessing">
                <p>Processing</p>
              </Link>
              <Link className="w-full" to="/customerAll">
                <p>All Customers</p>
              </Link>
              <Link className="w-full" to="/customerBlocked">
                <p>Blocked</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Locations */}
        <div
          onClick={() => activateMenu(5)}
          className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 5 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">
                location_on
              </span>
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                }  flex items-center justify-between w-full`}
              >
                <span>Locations</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
              <Link className="w-full" to="/locationsCountry">
                <p>Country</p>
              </Link>
              <Link className="w-full" to="/locationsState">
                <p>State</p>
              </Link>
              <Link className="w-full" to="/locationsCity">
                <p>City</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Transaction */}
        <div
          onClick={() => activateMenu(6)}
          className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 6 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">
                receipt_long
              </span>
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                }  flex items-center justify-between w-full`}
              >
                <span>Transaction</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
              <Link className="w-full" to="/transactionPendingWithdraw">
                <p>Pending Withdraw</p>
              </Link>
              <Link className="w-full" to="/transactionUnsettledBalance">
                <p>Unsettled Balance</p>
              </Link>
              <Link className="w-full" to="/transactionRevenue">
                <p>Revenue</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Warehouse */}
        <div
          onClick={() => activateMenu(7)}
          className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 7 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">house</span>
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                }  flex items-center justify-between w-full`}
              >
                <span>Warehouse</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
              <Link className="w-full" to="/WarehouseAll">
                <p>All Warehouse</p>
              </Link>
              <Link className="w-full" to="/WarehouseAddNew">
                <p>Add New Warehouse</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Staff */}
        <div
          onClick={() => activateMenu(8)}
          className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
            isClosed ? "collapse-close" : ""
          } w-full mx-auto ${
            isActive === 8 ? "bg-primaryMainLightest text-primaryMain" : ""
          }`}
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <div
              className={`flex items-center ${
                isClosed ? "justify-center pl-2" : "justify-start"
              }`}
            >
              <span class="material-symbols-outlined text-blackMid">group</span>
              &nbsp;
              <p
                className={`${
                  canShow ? "hidden" : "block"
                }  flex items-center justify-between w-full`}
              >
                <span>Staff</span>
              </p>
            </div>
          </div>
          <div className="collapse-content bg-whiteHigh text-blackMid">
            <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
              <Link to="/staffAll">
                <p>All Staff</p>
              </Link>
              <Link className="w-full" to="/staffAddNew">
                <p>Add New Staff</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Payment Gateway */}
        <div
          onClick={() => activateMenu("payment")}
          className={`p-3 w-full ${
            isActive === "payment"
              ? "bg-primaryMainLightest text-primaryMain"
              : ""
          }`}
        >
          <Link
            className={`flex items-center ${
              isClosed ? "justify-center" : "justify-start"
            }`}
            to="/"
          >
            <span class="material-symbols-outlined text-blackMid">
              credit_card
            </span>
            &nbsp;
            <p className={`${canShow ? "hidden" : "block"}`}>Payment Gateway</p>
          </Link>
        </div>
        {/* Withdraw Request */}
        <div
          onClick={() => activateMenu("withdraw")}
          className={`p-3 w-full ${
            isActive === "withdraw"
              ? "bg-primaryMainLightest text-primaryMain"
              : ""
          }`}
        >
          <Link
            className={`flex items-center ${
              isClosed ? "justify-center" : "justify-start"
            }`}
            to="/"
          >
            <span class="material-symbols-outlined text-blackMid">
              payments
            </span>
            &nbsp;{" "}
            <p className={`${canShow ? "hidden" : "block"}`}>
              Withdraw Request
            </p>
          </Link>
        </div>
        {/* Business Setup */}
        <div
          onClick={() => activateMenu("business")}
          className={`p-3 w-full ${
            isActive === "business"
              ? "bg-primaryMainLightest text-primaryMain"
              : ""
          }`}
        >
          <Link
            className={`flex items-center ${
              isClosed ? "justify-center" : "justify-start"
            }`}
            to="/"
          >
            <span class="material-symbols-outlined text-blackMid">work</span>{" "}
            &nbsp;
            <p className={`${canShow ? "hidden" : "block"}`}>Business Setup</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SideNav;
