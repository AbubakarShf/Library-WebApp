import React, { useContext, useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useParams } from "react-router-dom";
import CartContext from "../useContextProvider/CartContext";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();

  const { Books, handleAddToCart } = useContext(CartContext);
  const goTo = useNavigate();

  const [inCart, setInCart] = useState(false);

  const add = ({ id, price, img, qty, title, rating }) => {
    handleAddToCart({ id, price, img, qty, title, rating });
    setInCart(true);
  };

  return (
    <>
      {Books.map(
        ({ id, img, title, price, summary, description, qty, rating }) => {
          if (detailId == id) {
            return (
              <div key={id} className=" py-56 max-w-full ">
                <div>
                  <span onClick={() => goTo(`/books`)}>
                    <IoMdArrowRoundBack
                      size={50}
                      className="cursor-pointer  mb-9 ml-14"
                    />
                  </span>
                </div>
                <div className="flex md:flex-row justify-center gap-2 px-4 flex-wrap">
                  <div>
                    <img
                      src={img}
                      className="cursor-pointer h-[540px] w-[400px] object-fill  hover:-translate-y-7"
                    />
                  </div>
                  <div className="mt-3 max-w-[600px] px-14 flex flex-col">
                    <p className="md:text-3xl text-xl font-bold mt-10 py-2">
                      {title}
                    </p>
                    <span className="flex flex-row py-1 ">
                      <AiFillStar className="text-yellow-500" size={23} />
                      <AiFillStar className="text-yellow-500" size={23} />
                      <AiFillStar className="text-yellow-500" size={23} />
                      <AiFillStar className="text-yellow-500" size={23} />
                      <AiFillStar className="text-yellow-500" size={23} />
                    </span>
                    <p className="text-xl">${price}</p>
                    <div className="mt-3">
                      <h1 className="md:text-2xl text-xl font-bold">summary</h1>
                      <p className="mt-1">{summary}</p>
                      <p className="mt-5">{description}</p>
                    </div>
                    <div className="mt-7">
                      <button
                        onClick={() =>
                          inCart
                            ? goTo("/cart")
                            : add({ id, price, img, qty, title })
                        }
                        className="bg-purple-700 py-3 px-9 text-white rounded-md cursor-pointer"
                      >
                        {inCart ? "Check Out" : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-16 md:px-44 px-16">
                  <div>
                    <h1>Recommned Books</h1>
                  </div>
                </div>
              </div>
            );
          }
        }
      )}
    </>
  );
};

export default Detail;
