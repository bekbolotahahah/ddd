import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    paginate(selectedPage + 1);
  };

  return (
    <ReactPaginate
      className="flex gap-3 text-lg"
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      disabledClassName={"disabled"}
      initialPage={currentPage - 1}
    />
  );
};

export default Pagination;
