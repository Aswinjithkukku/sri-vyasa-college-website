import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function CardSection() {
  const data = ["NCC", "NSS", "ISCOV", "LIBRARY"];
  return (
    <div className="max-w-screen-lg mx-auto px-2 py-10">
      <div className="grid grid-cols-4 gap-2">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-peachColor h-[230px] text-primary group transition-all duration-500 hover:-translate-y-3 cursor-pointer"
          >
            <div className="flex flex-col w-full h-full justify-center items-center space-y-5 p-5 ">
              <h3 className="text-2xl font-semibold font-mono tracking-wider">
                {item}
              </h3>
              <p className="text-sm text-center">
                Click here to edit the text and include the information you
                would like to feature.
              </p>
              <p className="hidden group-hover:block text-4xl ">
                <HiArrowLongRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
