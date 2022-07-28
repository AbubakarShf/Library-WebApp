import React, { useContext, useState } from "react";
import Feature from "../Comp/Feature";
import Search from "../Comp/Search";
import CartContext from "../useContextProvider/CartContext";

const Books = () => {
  const { Books } = useContext(CartContext);
  const [FilteredBooks,setFilteredBooks]= useState(Books);

  //sort
  const filterBooks = (filter) => {
    if (filter === "LOW_TO_HIGH") {
      setFilteredBooks(Books?.sort((a, b) => (a.price > b.price ? 1 : -1)))
      console.log("Sorted Low to High")
      console.log(FilteredBooks)
    }
    if (filter === "HIGH_TO_LOW") {
      setFilteredBooks(Books?.sort((a, b) => (a.price > b.price ? -1 : 1)))
      console.log("Sorted High to Low ")
      console.log(FilteredBooks)
    }
    if (filter === "RATING") {
      setFilteredBooks([])

      setFilteredBooks(Books?.sort((a, b) => (a.rating > b.rating ? -1 : 1)))
      console.log("Sorted by Rating")
      console.log(FilteredBooks)
    }
  };
  return (
    <>
      <div className="py-60  bg-slate-100 max-w-full  ">
        <h1 className="md:text-4xl text-2xl text-center">All Books</h1>
        <Search />
        <select
          id="filter"
          defaultValue="DEFAULT"
          onChange={(e)=>filterBooks(e.target.value)}
          className="px-3 py-3 md:w-[380px] w-[200px]"
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="LOW_TO_HIGH">Price,low-high</option>
          <option value="HIGH_TO_LOW">Price,high-low</option>
          <option value="RATING">Rating</option>
        </select>
        <div className="flex md:flex-row justify-center  gap-7 items-center flex-wrap mt-10 ">

          {FilteredBooks.map(({ id, img, price, title, rating }) => (
            <Feature
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
