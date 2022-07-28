import React, { useContext, useState } from "react";
import Books from "../data";
import CartContext from "../useContextProvider/CartContext";
const Search = () => {
  const [BooksData, setBooksData] = useState(Books);
  const { searchProducts } = useContext(CartContext);


  return (
    <>
      <div className="flex md:flex-row max-w-full mt-6 px-10 gap-5  items-center justify-center justify-around  justify-between space-y-6 flex-col items-center">
        <input
          type="search"
          onChange={(e) => searchProducts(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 items-center mt-6 w-[200px] md:w-[350px]  "
        />

      </div>
    </>
  );
};

export default Search;
