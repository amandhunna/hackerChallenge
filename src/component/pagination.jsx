import React from "react";

const Pagination = ({ pageNumber, setStatePageNumber }) => {
  const setPageNumber = value => {
    switch (value) {
      default: {
        setStatePageNumber(0);
        break;
      }
      case "prev": {
        if (pageNumber) setStatePageNumber(previousState => previousState - 1);
        break;
      }
      case "next": {
        setStatePageNumber(previousState => previousState + 1);
        break;
      }
    }
  };
  return (
    <div className="pagination-buttons">
      <button onClick={() => setPageNumber("prev")}>{"< previous page"}</button>
      <button>{`current page: ${pageNumber + 1} `}</button>
      <button onClick={() => setPageNumber("next")}>{"next >"}</button>
    </div>
  );
};
export default Pagination;
