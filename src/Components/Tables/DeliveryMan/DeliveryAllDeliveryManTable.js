import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeliveryContext } from "../../../Contexts/DeliveryContext/DeliveryProvider";
import EmptyScreen from "../../Shared/EmptyScreens/EmptyScreen";

const DeliveryAllDeliveryManTable = ({ rows, handleSelectCheckbox }) => {
  const { searchBarValue, setCurrentRider, updateRiderStatus } =
    useContext(DeliveryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows?.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    if (searchBarValue !== null) {
      setCurrentPage(1);
      setActiveButton(1);
    }
  }, [searchBarValue]);

  const handleItemsPerPage = (value) => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    setCurrentPage(1);
    setRowsPerPage(value);
    console.log(value);
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber);
  };

  const handleCheckbox = (order, e) => {
    handleSelectCheckbox(order, e);
  };

  // const handleAllCheckbox = (orders, e) => {
  //   handleSelectAllCheckbox(orders, e);
  // };

  console.log(rows);

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
      pageNumbers?.push(i);
    }

    return (
      <nav>
        <ul className="pagination flex gap-2">
          {pageNumbers?.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              <button
                className={`page-link btn btn-sm ${
                  activeButton === pageNumber
                    ? "text-primaryMainLightest bg-primaryMain border-primaryMain hover:bg-primaryMain hover:text-whiteHigh hover:border-primaryMain"
                    : "text-blackMid bg-whiteMid border-primaryMainLighter hover:bg-primaryMain hover:text-whiteHigh hover:border-primaryMain"
                }`}
                onClick={() => handleClick(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className=" relative pb-16">
      {rows.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr className="font-bold text-center text-3xl">
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                {/* <input
                type="checkbox"
                className="checkbox rounded-none"
                name="allCheckbox"
                onChange={(e) => {
                  handleAllCheckbox(currentRows, e);
                }}
              /> */}
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Serial
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Name
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Created
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Gender
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Contact
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Email
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Work
              </th>
              <th className="bg-secondaryMainLightest text-bold text-lg normal-case">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentRows?.map((rider, i) => {
              return (
                <tr key={i} className="text-center">
                  <th className="px-0">
                    <input
                      type="checkbox"
                      className="checkbox rounded-none"
                      name="checkbox"
                      onChange={(e) => {
                        handleCheckbox(rider, e);
                      }}
                    />
                  </th>
                  <td className="px-0">{i + 1}</td>
                  <td className="px-0 mx-0">{rider?.rider_id}</td>
                  <td className="px-0 mx-0">{rider?.rider_name}</td>
                  {/* <td className="px-0 mx-0">
                    {rider?.timestamp?.toDate().toLocaleDateString()}
                  </td> */}
                  <td className="px-0 mx-0">{rider?.rider_gender}</td>
                  <td className="px-0 mx-0">{rider?.rider_contact}</td>
                  <td className="px-0">{rider?.rider_email}</td>
                  <td className="px-0 mx-0">{rider?.rider_work_location}</td>
                  <td className="px-0 py-0">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label
                        tabIndex={1}
                        className="rounded-lg px-2 py-1 w-24 focus:outline-none active:border-none text-primaryMain bg-primaryMainLightest"
                      >
                        Pending &nbsp;
                        <i className="fa-solid fa-angle-down text-sm"></i>
                      </label>
                      <ul
                        tabIndex={1}
                        className="dropdown-content menu mt-2 m-0.5 shadow bg-base-100 rounded-md w-36"
                      >
                        <label
                          onClick={() =>
                            updateRiderStatus(rider?.rider_id, "Approved")
                          }
                        >
                          <li>
                            <p className="text-successColor py-1 active:bg-blackLow w-full rounded-t-md">
                              Confirm
                            </p>
                          </li>
                        </label>
                        <hr className="text-disabledColor opacity-10" />
                        <li>
                          <Link
                            to={{
                              pathname: `/rideredit/${rider?.rider_id}`,
                              rider: rider,
                            }}
                            className="py-1 active:bg-blackLow"
                          >
                            Edit
                          </Link>
                        </li>
                        <hr className="text-disabledColor opacity-10" />
                        <label
                          onClick={() => setCurrentRider(rider)}
                          htmlFor="blockPopup"
                        >
                          <li>
                            <p className="text-errorColor py-1 active:bg-blackLow rounded-b-md">
                              Decline
                            </p>
                          </li>
                        </label>
                      </ul>
                    </div>
                  </td>
                  {/* <td className="px-0 mx-0">
                    <div className="flex items-center justify-center gap-0">
                      <label
                        htmlFor="pausePopup"
                        className="btn rounded-full bg-whiteHigh text-blackMid border-none hover:bg-whiteHigh"
                      >
                        <span class="material-symbols-outlined p-0">block</span>
                      </label>

                      <label
                        htmlFor="pausePopup"
                        className="btn rounded-full bg-whiteHigh text-primaryMain border-none hover:bg-whiteHigh"
                      >
                        <span class="material-symbols-outlined">
                          border_color
                        </span>
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
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <EmptyScreen></EmptyScreen>
      )}
      <section className="flex items-center justify-end gap-4 py-4 absolute bottom-0 right-0">
        <div>{renderPagination()}</div>
        <div>
          <p>
            Showing {indexOfFirstRow + 1}-
            {indexOfLastRow > rows?.length ? rows?.length : indexOfLastRow} of{" "}
            {rows?.length}
          </p>
        </div>
        <div className="dropdown dropdown-top dropdown-end">
          <label
            tabIndex={3}
            className="rounded-lg px-2 py-2 border-2 text-primaryMain bg-primaryMainLightest"
          >
            {rowsPerPage} &nbsp;
            <i className="fa-solid fa-angle-down text-sm"></i>
          </label>
          <ul
            tabIndex={3}
            className="dropdown-content menu p-1 mt-2 m-0.5 shadow bg-base-100 rounded-md "
          >
            <hr className="text-disabledColor opacity-10" />
            <li>
              <p
                onClick={() => handleItemsPerPage(10)}
                className="py-1 active:bg-blackLow"
              >
                10
              </p>
            </li>
            <hr className="text-disabledColor opacity-10" />
            <li>
              <p
                onClick={() => handleItemsPerPage(25)}
                className="py-1 active:bg-blackLow"
              >
                25
              </p>
            </li>
            <hr className="text-disabledColor opacity-10" />
            <li>
              <p
                onClick={() => handleItemsPerPage(50)}
                className="py-1 active:bg-blackLow"
              >
                50
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DeliveryAllDeliveryManTable;