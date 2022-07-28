import React, { useContext } from "react";
import Feature from "../Comp/Feature";
import Search from "../Comp/Search";
import CartContext from "../useContextProvider/CartContext";

const Books = () => {
  const { Books } = useContext(CartContext);
  return (
    <>
      <div className="py-60  bg-slate-100 max-w-full  ">
        <h1 className="md:text-4xl text-2xl text-center">All Books</h1>
        <Search />
        <div className="flex md:flex-row justify-center  gap-7 items-center flex-wrap mt-10 ">
          {Books.map(({ id, img, price, title, rating }) => (
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
