import React from "react";
import { Hero, Navbar } from "../components";
import BooksList from "../containers/BooksList";

const Home = () => {
  return (
    <div className="container mx-auto max-w-7xl py-6 px-2 md:px-0">
      <Navbar />
      <Hero />
      <BooksList />
    </div>
  );
};

export default Home;
