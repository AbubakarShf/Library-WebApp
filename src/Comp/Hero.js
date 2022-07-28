import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-purple-100  max-w-full   px-8 flex flex-col">
        <div className=" flex flex-col justify-center items-center mt-6">
          <p className="text-purple-900 font-bold md:text-5xl mt-24 text-4xl max-w-[580px] mb-7 text-center">
            Australia's most awarded online library platform
          </p>
          <p className="text-black font-bold md:text-3xl text-2xl max-w-[580px] mb-7 text-center">
            Find your dream book with{" "}
            <span className="text-purple-800">Library</span>
          </p>
        </div>

        <div className="max-w-auto flex flex-row justify-center ">
          <img
            className="w-[600px] "
            src="https://libraryapp-react.herokuapp.com/static/media/Undraw_Books.64f45ed2.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
