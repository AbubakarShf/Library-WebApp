import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { AiFillTag } from "react-icons/ai";

const Card = () => {
  return (
    <>
      <div className="mt-16 md:px-28 px-11 mb-14">
        <div>
          <h1 className="text-center md:text-3xl text-2xl  font-bold">
            Why choose <span className="text-purple-800">Library</span>
          </h1>
          <div className="flex md:flex-row flex-col gap-7 items-center md:justify-center md:justify-between md:justify-around mt-12">
            <div className="max-w-md  flex flex-col justify-center items-center">
              <div className="border-2 border-purple-300 px-7 py-6 ">
                <BsFillLightningFill size={60} className="text-purple-800" />
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="font-bold text-xl">Easy and Quick</h1>
                <p className="text-center mt-1 max-w-[210px]">
                  Get access to the book you purchased online instantly.
                </p>
              </div>
            </div>
            <div className="max-w-md  flex flex-col justify-center items-center">
              <div className="border-2 border-purple-300 px-7 py-6 ">
                <GiOpenBook size={60} className="text-purple-800" />
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="font-bold text-xl">10,000+ Books</h1>
                <p className="text-center mt-1 max-w-[210px]">
                  Library has books in all your favourite categories.
                </p>
              </div>
            </div>
            <div className="max-w-md  flex flex-col justify-center items-center">
              <div className="border-2 border-purple-300 px-7 py-6 ">
                <AiFillTag size={60} className="text-purple-800" />
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                <h1 className="font-bold text-xl">Affordable</h1>
                <p className="text-center mt-1 max-w-[210px]">
                  Get your hands on popular books for as little as $10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
