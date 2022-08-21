import React from "react";
import { StarIcon } from "@heroicons/react/outline";
const Book = ({ book }) => {
  const { id, title, formats } = book;

  return (
    <div id={id}>
      <img src={formats["image/jpeg"]} alt={title} className="h-64" />
      <p>{title.length > 20 ? `${title.substring(0, 20)}...` : `${title}`}</p>
      <p className="flex">
        {[...Array(5)].map((elementInArray, index) => (
          <span key={index}>
            <StarIcon className="fill-yellow-400 w-5 stroke-0" />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Book;
