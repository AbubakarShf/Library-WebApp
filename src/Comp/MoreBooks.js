import React from "react";
import { useNavigate } from "react-router-dom";

const MoreBooks = () => {
  const handleBooks = useNavigate();
  return (
    <>
      <div className="bg-purple-100">
        <div className=" text-center ">
          <h1 className="py-10 md:text-3xl text-2xl font-bold">
            Explore More <span className="text-purple-700">Books</span>
          </h1>
          <button
            onClick={() => handleBooks(`/books`)}
            className="text-white text-xl bg-purple-700 px-7 py-3 rounded-lg mb-5"
          >
            Explore Books
          </button>
        </div>
      </div>
    </>
  );
};

export default MoreBooks;
