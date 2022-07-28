import React, { useContext } from "react";
import Feature from "./Feature";
import CartContext from "../useContextProvider/CartContext";

const Items = () => {
  const { Books, handleAddToCart } = useContext(CartContext);
  return (
    <>
      <div>
        <div className="mt-20">
          <h1 className=" text-center relative top-10 font-bold md:text-3xl text-2xl">
            Discount <span className="text-purple-700 ">Books</span>
          </h1>
        </div>
        <div className="flex md:flex-row justify-center gap-7 items-center flex-wrap mt-10 ">
          {Books.slice(4, 12).map(({ id, img, price, title, rating }) => (
            <Feature
              key={id}
              id={id}
              title={title}
              rating={rating}
              img={img}
              price={price}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
