import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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

          {/*{user && (
            <span className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              {user.name}
            </span>
          )}

          {user && <button onClick={() => dispatch(logout())}>logout</button>} */}
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
              Home
            </li>

            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              About_us
            </li>
            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              Gallery
            </li>
            <li className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              Contact
            </li>

            {!user ? (
              <button className="bg-white font-semibold mr-2 text-black border border-gray-400 rounded shadow cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            ) : (
              <div>
                <span className=" font-bold ">{user.name}</span>
                <button
                  onClick={dispatch(logout())}
                  className="bg-white font-semibold mr-2 text-black border border-gray-400 rounded shadow cursor-pointer"
                >
                  logout
                </button>
              </div>
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
        <ul className=" ml-16 ">
          <li className="mb-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            Home
          </li>

          <hr className="w-[70%] text-slate-500 " />

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            About_us
          </li>
          <hr className="w-[70%]  text-slate-500 " />
          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            Gallery
          </li>
          <hr className="w-[70%] text-slate-500 " />

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            Contact
          </li>
          <li className="pb-6 flex">
            {user && (
              <span className="mr-2 font-bold hover:text-[#3ecfe2] hover:mx-1 cursor-pointer border">
                {user.name}
              </span>
            )}

            {user && <button onClick={() => dispatch(logout())}>logout</button>}
          </li>
        </ul>
      </div>
      {/*end of mobile nav */}
    </div>
  );
};

export default Navbar;
