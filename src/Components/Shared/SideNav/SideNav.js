import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const SideNav = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [canShow, setCanShow] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");

  const { dbUser, userType } = useContext(AuthContext);

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
          <img
            className="w-12 h-12 rounded-full"
            src={dbUser?.user_image}
            alt=""
          />
        </div>
        <div
          className={`${
            canShow ? "hidden" : "block"
          } flex items-start justify-between gap-4 overflow-auto`}
        >
          <div>
            <p className="font-black text-blackMid">{dbUser?.user_name}</p>
            <p className="text-sm text-blackMid">{dbUser?.user_type}</p>
          </div>
        </div>
        <div
          className={`${
            canShow ? "hidden" : "block"
          } flex items-start justify-between gap-4 overflow-auto`}
        >
          <button onClick={toggleSideNav} className="btn-btn-ghost">
            <span className="material-symbols-outlined text-blackMid">
              menu_open
            </span>
          </button>
        </div>
      </section>
      {/* routes */}
      <section className="flex flex-col justify-start items-start gap-1">
        {/* dashboard */}
        {(userType === "Admin" || userType === "Manager") && (
          <div
            onClick={() => activateMenu("dashboard")}
            className={`px-2 py-4 w-full ${
              isActive === "dashboard"
                ? "bg-primaryMainLightest text-primaryMain"
                : null
            }`}
          >
            <Link
              className={`flex items-center ${
                isClosed ? "justify-center" : "justify-start pl-2"
              }`}
              to="/"
            >
              <span className="material-symbols-outlined text-blackMid">
                dashboard
              </span>
              &nbsp;
              <p className={`${canShow ? "hidden" : "block"}`}>Dashboard</p>
            </Link>
          </div>
        )}
        {/* order */}
        {(userType === "Admin" || userType === "Manager") && (
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
                <span className="material-symbols-outlined text-blackMid">
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
                <Link className="w-full" to="/orderspending">
                  <p>Pending</p>
                </Link>
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
        )}
        {/* Delivery Man */}
        {(userType === "Admin" || userType === "Manager") && (
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
                <span className="material-symbols-outlined text-blackMid">
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
        )}
        {/* Customers */}
        {(userType === "Admin" || userType === "Manager") && (
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
                <span className="material-symbols-outlined text-blackMid">
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
                <Link className="w-full" to="/customerAll">
                  <p>All Customers</p>
                </Link>
                <Link className="w-full" to="/customerBlocked">
                  <p>Blocked</p>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Locations */}
        {userType === "Admin" && (
          <div
            onClick={() => activateMenu(5)}
            className={`collapse ${!isClosed ? "collapse-arrow" : null} ${
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
                <span className="material-symbols-outlined text-blackMid">
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
        )}
        {/* Transaction */}
        {(userType === "Admin" || userType === "Manager") && (
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
                <span className="material-symbols-outlined text-blackMid">
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
                <Link className="w-full" to="/transactionUnsettledBalance">
                  <p>Unsettled Balance</p>
                </Link>
                <Link className="w-full" to="/transactionRevenue">
                  <p>Revenue</p>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Warehouse */}
        {(userType === "Admin" || userType === "Manager") && (
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
                <span className="material-symbols-outlined text-blackMid">
                  house
                </span>
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
              <div className="flex flex-col justify-start items-start gap- pl-8 ">
                <Link className="w-full" to="/WarehouseAll">
                  <p>All Warehouse</p>
                </Link>
                <Link className="w-full" to="/WarehouseAddNew">
                  <p>Add New Warehouse</p>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Staff */}
        {userType === "Admin" && (
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
                <span className="material-symbols-outlined text-blackMid">
                  group
                </span>
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
                <Link className="w-full" to="/staffRole">
                  <p>Role</p>
                </Link>
                <Link className="w-full" to="/staffAll">
                  <p>All Staff</p>
                </Link>
                <Link className="w-full" to="/staffAddNew">
                  <p>Add New Staff</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* withdraw request */}
        {userType === "Admin" && (
          <div
            onClick={() => activateMenu(9)}
            className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
              isClosed ? "collapse-close" : ""
            } w-full mx-auto ${
              isActive === 9 ? "bg-primaryMainLightest text-primaryMain" : ""
            }`}
          >
            <input type="checkbox" />
            <div className="collapse-title">
              <div
                className={`flex items-center ${
                  isClosed ? "justify-center pl-2" : "justify-start"
                }`}
              >
                <span className="material-symbols-outlined text-blackMid">
                  payments
                </span>
                &nbsp;
                <p
                  className={`${
                    canShow ? "hidden" : "block"
                  }  flex items-center justify-between w-full`}
                >
                  <span>Withdraw Request</span>
                </p>
              </div>
            </div>
            <div className="collapse-content bg-whiteHigh text-blackMid">
              <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
                <Link className="w-full" to="/withdrawPending">
                  <p>Pending</p>
                </Link>
                <Link className="w-full" to="/withdrawConfirmed">
                  <p>Confirmed</p>
                </Link>
                <Link className="w-full" to="/withdrawCancelled">
                  <p>Cancelled</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Business Setup */}
        {userType === "Admin" && (
          <div
            onClick={() => activateMenu(10)}
            className={`collapse  ${!isClosed ? "collapse-arrow" : null} ${
              isClosed ? "collapse-close" : ""
            } w-full mx-auto ${
              isActive === 10 ? "bg-primaryMainLightest text-primaryMain" : ""
            }`}
          >
            <input type="checkbox" />
            <div className="collapse-title">
              <div
                className={`flex items-center ${
                  isClosed ? "justify-center pl-2" : "justify-start"
                }`}
              >
                <span className="material-symbols-outlined text-blackMid">
                  work
                </span>
                &nbsp;
                <p
                  className={`${
                    canShow ? "hidden" : "block"
                  }  flex items-center justify-between w-full`}
                >
                  <span>Business Setup</span>
                </p>
              </div>
            </div>
            <div className="collapse-content bg-whiteHigh text-blackMid">
              <div className="flex flex-col justify-start items-start gap-2 pl-8 ">
                <Link className="w-full" to="/businessDeliveryCost">
                  <p>Delivery Cost</p>
                </Link>
                <Link className="w-full" to="/businessDeliveryManCharge">
                  <p>Delivery Man Charge</p>
                </Link>
                {/* <Link className="w-full" to="/businessNotificationSettings">
                <p>Notification Settings</p>
              </Link> */}
              </div>
            </div>
          </div>
        )}

        {/* Payment Gateway */}
        {userType === "Admin" && (
          <div
            onClick={() => activateMenu("business")}
            className={`px-3 py-4 w-full ${
              isActive === "business"
                ? "bg-primaryMainLightest text-primaryMain"
                : ""
            }`}
          >
            <Link
              className={`flex items-center ${
                isClosed ? "justify-center" : "justify-start"
              }`}
              to="/paymentGateway"
            >
              <span className="material-symbols-outlined text-blackMid">
                credit_card
              </span>{" "}
              &nbsp;
              <p className={`${canShow ? "hidden" : "block"}`}>
                Payment Gateway
              </p>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default SideNav;
