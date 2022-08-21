import React from "react";

const Paginate = ({ data, paginateFunc }) => {
  const { next, previous } = data;
  return (
    <div className="flex items-center justify-around mt-6">
      <button
        className="py-2 px-4 text-white bg-slate-600 rounded-lg"
        onClick={() => {
          if (previous !== null) {
            paginateFunc(previous);
          }
        }}
      >
        Previous
      </button>
      <button
        className="py-2 px-4 text-white bg-slate-600 rounded-lg"
        onClick={() => {
          if (next !== null) {
            paginateFunc(next);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
