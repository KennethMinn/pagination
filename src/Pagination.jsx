import React, { useState } from "react";

const Pagination = ({
  itemsPerPage,
  setCurrentPage,
  currentPage,
  data,
}) => {
  const totalItems = data.length;
  console.log(currentPage + " pagination");

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const [active, setActive] = useState(1);

  const prevFun = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const nextFun = () => {
    if (currentPage !== 6) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <div className=" flex justify-center mt-10">
      <button className={`border px-2`} onClick={prevFun}>
        prev
      </button>
      {pages.map((page) => (
        <div key={page}>
          <button
            onClick={() => {
              setCurrentPage(page);
              setActive(page);
              console.log(page);
            }}
            className={`border px-2 ${
              active === page ? " bg-slate-700 text-white" : " bg-slate-50"
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      <button onClick={nextFun} className={`border px-2`}>
        next
      </button>
    </div>
  );
};

export default Pagination;
