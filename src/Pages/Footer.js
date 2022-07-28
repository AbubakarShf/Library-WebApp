import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-7 max-w-full ">
        <div className="flex flex-col justify-center items-center gap-6 mx-auto">
          <img
            className="invert w-[200px]"
            src="https://libraryapp-react.herokuapp.com/static/media/Library.70d0a6a9.svg"
          />
          <nav className="space-x-10 text-xl cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <div>
            <p>Copyright @ 2021 Library</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
