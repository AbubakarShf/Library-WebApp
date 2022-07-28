import React, { useContext } from "react";
import CartItem from "../Comp/CartItem";
import CartContext from "../useContextProvider/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Checkout = () => {
    alert("Have not gotten this far yet! :(");
  };
  const handleBooks = useNavigate();
  const { cartBooks, removeAll } = useContext(CartContext);
  return cartBooks.length > 0 ? (
    <>
      <div className="py-44 text-black text-5xl ">
        <div className="flex flex-row justify-center items-center mb-6  justify-between justify-around">
          <div className="flex items-center">
            <h1 className=" md:text-4xl text-3xl  font-bold ">Cart</h1>
          </div>
          <div className="flex items-center">
            <button onClick={removeAll} className="text-3xl font-bold ">
              Remove all
            </button>
          </div>
        </div>
        <div className="bg-purple-700 md:px-11  flex flex-row  mx-auto max-w-6xl justify-center items-center px-2 justify-between  py-3 text-white md:text-xl text-lg  ">
          <div>
            <p>Book</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
        {cartBooks.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <div className="md:px-24 flex flex-row  mx-auto  px-6 items-center text-sm  justify-end  py-5 ">
          <div
            className="flex mt-12 mb-6 text-sm  "
            style={{
              borderTop: "3px solid purple",
              width: "310px",
            }}
          >
            <div className="flex text-sm  md:text-2xl -px-20 flex-col gap-10 mt-4">
              <div className=" flex md:gap-32 gap-24">
                SubTotal:
                <div>
                  $
                  {cartBooks
                    .reduce((total, item) => total + item.price * item.qty, 0)
                    .toFixed(2)}
                </div>
              </div>
              <div className=" flex md:gap-48 gap-36">
                Tax:
                <div>$3.45</div>
              </div>
              <div className=" flex md:gap-44 gap-32">
                Total:
                <div>
                  $
                  {cartBooks
                    .reduce(
                      (total, item) => total + item.price * item.qty,
                      3.45
                    )
                    .toFixed(2)}
                </div>
              </div>
              <div className="mt-8 mx-auto max-w-full">
                <button
                  onClick={Checkout}
                  className="bg-purple-700 px-10 py-3  text-white rounded-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className=" px-10 mb-7  py-44 ">
        <div className="bg-purple-700 md:px-11 flex flex-row  mx-auto max-w-6xl justify-center items-center px-2 justify-between  py-3 text-white md:text-xl text-lg  ">
          <div>
            <p>Book</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl  flex md:flex-row flex-col justify-center">
          <img
            className="w-full h-[53vh] mt-6 "
            src="https://libraryapp-react.herokuapp.com/static/media/empty_cart.378125a8.svg"
          />
        </div>
        <div className="text-center mt-10">
          <p className="md:text-4xl text-2xl font-bold">
            You don't have any books in your cart!
          </p>
          <button
            onClick={() => handleBooks(`/books`)}
            className="text-white text-xl mt-5  bg-purple-700 px-7 py-3 rounded-lg mb-5"
          >
            Explore Books
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
