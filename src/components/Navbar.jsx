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
    <div className="fixed top-0 right-0 left-0">
      <nav className="bg-[#0a0202] h-[60px] px-3 md:px-8 py-1 flex justify-between">
        <h1 className="text-[#43e643] text-2xl md:text-3xl font-serif font-bold m-2">
          <Link to="/">
            ATWIRA <span className="text-[white]">tect.</span>
          </Link>

          {user && (
            <span className="mr-2 hover:text-[#43e643] hover:mx-1 cursor-pointer">
              {user.name}
            </span>
          )}

          {user && <button onClick={() => dispatch(logout())}>logout</button>}
        </h1>

        {/* nav for large display */}
        <div className="ml-[-1000px]">
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

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            About_us
          </li>

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            Gallery
          </li>

          <li className="my-3 hover:text-[#43e643] hover:mx-1 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      {/*end of mobile nav */}
    </div>
  );
};

export default Navbar;
