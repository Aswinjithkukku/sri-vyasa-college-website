import React, { useState } from "react";
import { logo } from "../images";
import { BiLogoYoutube, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <div className="bg-primary w-full relative">
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="flex sm:block md:flex  md:justify-between py-2 space-y-2 md:space-y-0 ">
          <div className="w-full flex justify-start sm:justify-center md:justify-start ">
            <img src={logo} alt="vyasa" className="md:w-[300px] w-[200px]" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsShow(true)}
              className="text-2xl text-white"
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div
            className={`hidden sm:flex items-center gap-4 justify-center md:justify-end `}
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
            <div className="relative">
              <p
                onMouseOver={() => {
                  setIsDropDown(true);
                }}
                onMouseLeave={() => {
                  setIsDropDown(false)
                }}
                className="uppercase text-white hover:text-blue-600 font-medium cursor-pointer "
              >
                More...
              </p>
              {isDropDown && (
                <div className="absolute -bottom-16 -left-16 z-40">
                  <div className="w-[180px] text-center bg-primary text-white uppercase hover:text-blue-600 font-medium cursor-pointer p-3">
                    COLLEGE LIFE
                  </div>
                </div>
              )}
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
      <div
        className={`${
          isShow ? " left-0 w-full " : " -left-3/4 "
        } fixed top-0 bottom-0 h-[100vh]  transition-all duration-1000 z-50 bg-slate-50 `}
      >
        <div
          onClick={() => setIsShow(false)}
          className="flex justify-end text-2xl p-5 "
        >
          <AiOutlineClose />
        </div>
        <div className={`  `}>
          <div className="">
            <p className="uppercase text-gray-500 text-center py-5 hover:text-blue-600 font-medium cursor-pointer ">
              ABOUT
            </p>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 text-center py-5 hover:text-blue-600 font-medium cursor-pointer ">
              AcADEMICS
            </p>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 text-center py-5 hover:text-blue-600 font-medium cursor-pointer ">
              DEPARMENTS
            </p>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 text-center py-5 hover:text-blue-600 font-medium cursor-pointer ">
              RESEARCH
            </p>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 text-center py-5 hover:text-blue-600 font-medium cursor-pointer ">
              COLLEGE LIFE
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <div className="">
              <p className="uppercase text-gray-500 text-center  hover:text-blue-600 font-medium cursor-pointer text-2xl ">
                <BiLogoFacebook />
              </p>
            </div>
            <div className="">
              <p className="uppercase text-gray-500 text-center  hover:text-blue-600 font-medium cursor-pointer text-2xl ">
                <BiLogoInstagram />
              </p>
            </div>
            <div className="">
              <p className="uppercase text-gray-500 text-center  hover:text-blue-600 font-medium cursor-pointer text-2xl ">
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
