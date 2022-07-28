import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Feature = ({ id, price, img, title, rating }) => {
  const nav = useNavigate();
  const [rate, setRate] = useState([]);
  const handleNav = () => {
    nav(`/books/${id}`);
  };

  useEffect(() => {
    fillRate();
  }, [rating]);

  const fillRate = () => {
    const r = [];
    for (let i = 0; i < rating; i++) {
      r.push(i);
    }
    // console.log(r);
    setRate(r);
  };
  return (
    <>
      <div className="mt-12 mb-10 max-w-full ">
        <div className="flex flex-col">
          <div className="px-4">
            <img
              onClick={handleNav}
              src={img}
              className="cursor-pointer h-[390px] w-[290px]    hover:-translate-y-7"
            />
          </div>
          <div className="mt-3 px-4">
            <p className="md:text-xl">{title}</p>
            <span className="flex flex-row ">
              {rate.map((r, i) => (
                <AiFillStar key={i} className="text-yellow-500" size={23} />
              ))}
            </span>
            <p className="text-xl">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
