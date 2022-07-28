import React, { useContext } from "react";
import CartContext from "../useContextProvider/CartContext";

const CartItem = ({ item }) => {
  const { addQty, subQty, handleDecrease } = useContext(CartContext);
  const { id, img, price, qty, title } = item;
  const calc = () => {
    (price * qty).toFixed(2);
  };
  return (
    <>
      <div className="flex md:flex-row  justify-center justify-between justify-around flex flex-wrap  items-center">
        <div className="flex flex-row gap-4">
          <div className="mt-10 ">
            <img src={img} className="w-[130px] hidden md:block" />
          </div>
          <div className="flex text-sm md:text-lg  flex-col mt-10 justify-center  items-center w-[120px]">
            <p>{title}</p>
            <p className="mr-12 text-sm"> ${price}</p>
            <button onClick={() => subQty(id)} className="text-red-700 mr-9">
              Remove
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-xl">
          <div className="space-x-5 items-center justify-center md:text-xl text-sm ">
            <button onClick={() => addQty(id)}>+</button>
            <button>{qty}</button>
            <button onClick={() => handleDecrease(id)}>-</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-xl">
          <p className="md:text-lg text-sm">${price}</p>
        </div>
      </div>
      <div>{calc(price * qty)}</div>
    </>
  );
};

export default CartItem;
