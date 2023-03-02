import React, { useState } from "react";

const TableComponent = ({ rows, cols }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows?.slice(indexOfFirstRow, indexOfLastRow);

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {cols?.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {currentRows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {cols?.map((col, colIndex) => (
              <td key={colIndex}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination flex gap-2">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(pageNumber)}
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
    <div>
      <table className="table">
        {renderTableHeader()}
        {renderTableBody()}
      </table>
      {renderPagination()}
    </div>
  );
};

export default TableComponent;
