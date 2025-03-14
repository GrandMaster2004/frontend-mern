import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div>
      <div>
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
