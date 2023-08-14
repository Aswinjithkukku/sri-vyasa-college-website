import React, { useState } from "react";
import { logo } from "../images";
import { BiLogoYoutube, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="bg-primary w-full">
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="flex sm:block md:flex  md:justify-between py-2 space-y-2 md:space-y-0 ">
          <div className="w-full flex justify-start sm:justify-center md:justify-start ">
            <img src={logo} alt="vyasa" className="md:w-[300px] w-[200px]" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsShow(!isShow)}
              className="text-2xl text-white"
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className={`${
              isShow ? "  " : " hidden "
            }  sm:flex items-center gap-4 justify-center md:justify-end `}
          >
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer ">
                ABOUT
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer ">
                AcADEMICS
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer ">
                DEPARMENTS
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer ">
                RESEARCH
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer ">
                More...
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer text-2xl ">
                <BiLogoFacebook />
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer text-2xl ">
                <BiLogoInstagram />
              </p>
            </div>
            <div className="">
              <p className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer text-2xl ">
                <BiLogoYoutube />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
