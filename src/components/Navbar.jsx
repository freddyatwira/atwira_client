import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const username = user?.name;

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 right-0 left-0 ">
      <nav className="bg-[#0a0202] h-[60px] px-3 md:px-8 py-1 flex justify-between">
        <h1 className="text-[#43e643] text-2xl md:text-3xl font-serif font-bold m-2">
          <Link to="/">
            ATWIRA <span className="text-[white]">Tech.</span>
          </Link>
        </h1>

        {/* nav for large display */}
        <div
          className={
            nav
              ? "fixed left-[-100%] bg-black text-white w-[60%] md:left-[-100%] ease-in-out"
              : "ml-[-1500px]"
          }
        >
          <ul className="flex text-[#fbfcfb] m-2">
            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              <Link to="/home">Home</Link>
            </li>

            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              <Link to="/about">About_us</Link>
            </li>
            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              <Link to="/contact_us">Contact</Link>
            </li>

            {user ? (
              <div className="block md:flex justify-between">
                <span className="text-1xl font-semibold border rounded-sm mr-2">
                  {username}
                </span>
                <button onClick={() => dispatch(logout())}>logout</button>
              </div>
            ) : (
              <button className="bg-white rounded-sm text-black px-2">
                <Link to="/login">login</Link>
              </button>
            )}
          </ul>
        </div>

        <span className="text-white md:hidden m-2" onClick={handleNav}>
          {nav ? (
            <li className="fa fa-close text-3xl"></li>
          ) : (
            <li className="text-3xl fa fa-bars"></li>
          )}
        </span>
      </nav>

      {/*nav for mobile display */}

      <div
        className={
          nav
            ? "fixed left-0 bg-black text-white w-[60%] md:left-[-100%] ease-in-out"
            : "fixed left-[-100%] ease-in-out"
        }
      >
        <ul className=" ml-16  z-50">
          <li className="mb-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            <Link to="/home">Home</Link>
          </li>

          <hr className="w-[70%] text-slate-500 " />

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            <Link to="/about">About_us</Link>
          </li>
          <hr className="w-[70%]  text-slate-500 " />
          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </li>
          <hr className="w-[70%] text-slate-500 " />

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            <Link to="/contact_us">Contact</Link>
          </li>

          {user ? (
            <div className="block md:flex justify-between pb-5">
              <span className="text-1xl font-semibold border rounded-sm mr-2">
                {username}
              </span>
              <button onClick={() => dispatch(logout())}>logout</button>
            </div>
          ) : (
            <div className="pb-6">
              <button className="bg-white rounded-sm text-black px-2">
                <Link to="/login">login</Link>
              </button>
            </div>
          )}
        </ul>
      </div>
      {/*end of mobile nav */}
    </div>
  );
};

export default Navbar;
