import axios from "axios";
import React, { useEffect, useState } from "react";
import { Book, Loading, Paginate } from "../components";

const BooksList = () => {
  const [data, setData] = useState([]);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchBooks = async () => {
    setLoading(true);
    try {
      setError(false);
      const response = await axios.get("https://gutendex.com/books/");
      setData(response.data);
      setBooks(response.data.results);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      console.warn(error);
    }
  };

  const paginateFunc = async (url) => {
    setLoading(true);
    setBooks([]);
    try {
      setError(false);
      const response = await axios.get(url);
      setData(response.data);
      setBooks(response.data.results);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      console.warn(error);
    }
    console.log(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBooks();
    };

    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container mx-auto">
      {loading && <Loading />}
      {!loading && (
        <h2 className="text-2xl md:text-4xl text-[#252a31] mb-4">
          Popular Now
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6">
        {books.map((book) => {
          const { id } = book;
          return <Book key={id} book={book} />;
        })}
      </div>
      {!loading && <Paginate data={data} paginateFunc={paginateFunc} />}
    </div>
  );
};

export default BooksList;
