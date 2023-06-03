const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0">
      <nav className="bg-[#0a0202] h-[60px] px-8 py-1 flex justify-between ">
        <h1
          className="text-[#43e643] text-2xl md:text-3xl font-serif font-bold m-2"
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
        >
          ATWIRA <span className="text-[white]">tect.</span>
        </h1>

        <div className="flex">
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
      </nav>
    </div>
  );
};

export default Navbar;
