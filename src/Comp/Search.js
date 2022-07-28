import React, { useContext, useEffect, useState } from "react";
import Books from "../data";
import CartContext from "../useContextProvider/CartContext";
const Search = () => {
  const [BooksData, setBooksData] = useState(Books);
  const { searchProducts } = useContext(CartContext);
  useEffect(()=>{
console.log(BooksData)
  },[BooksData])
  const filterBooks = (filter) => {
    if (filter === "LOW_TO_HIGH") {
      setBooksData(()=>BooksData?.sort((a, b) => (a.price > b.price ? 1 : -1)))
      console.log("Sorted Low to High")
      console.log(BooksData)
    }
    if (filter === "HIGH_TO_LOW") {
      setBooksData(()=>BooksData?.sort((a, b) => (a.price > b.price ? -1 : 1)))
      console.log("Sorted High to Low ")
      console.log(BooksData)
    }
    if (filter === "RATING") {
      setBooksData(()=>BooksData?.sort((a, b) => (a.rating > b.rating ? -1 : 1)))
      console.log("Sorted by Rating")
      console.log(BooksData)
    }
  };
  return (
    <>
      <div className="flex md:flex-row max-w-full mt-6 px-10 gap-5  items-center justify-center justify-around  justify-between space-y-6 flex-col items-center">
        <input
          type="search"
          onChange={(e) => searchProducts(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 items-center mt-6 w-[200px] md:w-[350px]  "
        />
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
      </div>
    </>
  );
};

export default Search;
