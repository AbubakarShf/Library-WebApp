import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CartContext from "../useContextProvider/CartContext";
const Header = () => {
  const { cartBooks } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white w-full fixed z-50 right-0">
        <div className="py-5 px-4 md:px-24 flex flex-row shadow-xl sticky items-center justify-between cursor-pointer">
          <div>
            <img
              onClick={() => navigate(`/`)}
              className="md:w-[170px] w-[132px] cursor-pointer "
              src="https://libraryapp-react.herokuapp.com/static/media/Library.70d0a6a9.svg"
            />
          </div>
          <div className="hidden md:flex md:flex-row items-center space-x-5 text-purple-900 font-bold text-lg">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <div>
              <Link to="/cart" className="relative -top-4">
                <span className="relative top-2 left-5">
                  ({cartBooks.length})
                </span>
                <BsCartFill size={28} className="text-purple-700" />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex flex-row items-center gap-5">
            {open ? (
              <AiOutlineClose
                size={40}
                onClick={handleOpen}
                className="text-purple-700 "
              />
            ) : (
              <AiOutlineMenu
                size={30}
                onClick={handleOpen}
                className="text-purple-700 "
              />
            )}
            <div>
              <Link to="/cart" className="relative -top-4">
                <span className="relative top-2 left-5  text-purple-800">
                  ({cartBooks.length})
                </span>
                <BsCartFill size={28} className="text-purple-700" />
              </Link>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden flex flex-col bg-black items-center space-y-16 h-[100vh] w-60 fixed top-0 right-0 text-white  ">
            <AiOutlineClose
              size={40}
              onClick={handleOpen}
              className="text-white absolute left-7 mt-5 cursor-pointer "
            />
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/books" onClick={() => setOpen(false)}>
              Books
            </Link>

            <div>
              <Link to="/cart" className="relative -top-4">
                <span className="relative top-2 left-5 text-purple-800">
                  ({cartBooks.length})
                </span>
                <BsCartFill size={28} className="text-purple-700" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
