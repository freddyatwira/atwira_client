import logo from "../assets/atwira_logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="">
      <div className="bg-gradient-to-t from-black h-[50px]"></div>
      <div className="h-[150px] bg-black ">
        <div className="flex px-10 md:px-20 bg-black">
          {/*FIRST PART OF FOOTER */}
          <div className="hidden md:block w-[40%] ">
            <img
              src={logo}
              alt="atwira"
              className="h-[50px] rounded-[50%] mt-2"
            />
            <h1 className="text-white font-bold">ATWIRA TECH COMPANY</h1>
            <p className="text-white">Services with a professional touch.</p>
          </div>

          {/*END FIRST PART OF FOOTER */}

          {/* SOCIAL MEDIA STARTS HERE */}
          <div className="w-[50%] md:w-[30%]">
            <h1 className="text-[#43e643] font-bold">SOCIAL MEDIA</h1>
            <ul className="text-white">
              <li>
                <a
                  target="blank"
                  href="https://web.facebook.com/atwiradataentry"
                  className="fa fa-facebook text-2xl cursor-pointer"
                ></a>
                <span className="px-3">facebook</span>
              </li>

              <li>
                <a
                  target="blank"
                  href="https://www.youtube.com/channel/UCFaYMXCXY5WvQath0GKULsA"
                  className="fa fa-youtube text-2xl cursor-pointer"
                ></a>
                <span className="px-3">YouTube</span>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/fredrick-kariuki-02368815b/"
                  className="fa fa-linkedin text-2xl cursor-pointer"
                ></a>
                <span className="px-3">Linkedin</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA END HERE */}

          {/* USE LINKS STARTS */}
          <div className="text-white w-[50%] md:w-[30%]">
            <h1 className="text-[#43e643] font-bold">MORE LINKS</h1>
            <ul className="pl-2">
              <li>Blog</li>
              <li>Work</li>
              <li>Testimonies</li>
              <li>Partners</li>
            </ul>
          </div>

          {/* USE LINKS ENDS */}
        </div>
        <hr className="text-white w-[90%] mx-auto mt-4" />
        <div className="bg-black text-center h-[60px] pt-4">
          <p className="text-white mx-auto text-sm">
            Designed & maintained by{" "}
            <b className="text-[#43e643]">atwira tech</b>
          </p>
          <p className="text-white">
            ©{year - 1} - {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
