import React from "react";

const SearchResultPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-end items-center space-x-4">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img
          src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
          alt="Previous"
          className="rotate-90"
        />
      </button>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => handlePageClick(page + 1)}
          className={`border px-3 py-1 ${currentPage === page + 1 ? 'bg-black text-white' : 'border-black'}`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img
          src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg"
          alt="Next"
          style={{ transform: "rotate(270deg)" }}
        />
      </button>
    </div>
  );
};

export default SearchResultPagination;
