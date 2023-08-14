import React from "react";
import { featuireImageOne } from "../../images";
import { BsArrowRightCircle } from "react-icons/bs";

function FeaturesSection() {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="py-10">
        <h3 className="tracking-widest uppercase text-primary text-3xl font-medium">
          WELCOME TO SRI VYASA NSS COLLEGE
        </h3>
      </div>
      <div className="space-y-5">
        <div className="h-[350px] w-full grid grid-cols-2 bg-primary overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2 space-y-4">
              <div className="flex gap-2 items-center">
                <h4 className="text-6xl tracking-tight font-bold text-white">
                  ACADEMICS
                </h4>
                <p className="text-purple-600 text-2xl">
                  <BsArrowRightCircle />
                </p>
              </div>
              <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                Sri Vyasa NSS College offers top quality education in various
                graduate and post graduate courses. Our experienced faculty
                members are dedicated to providing an enriching educational
                experience to our students.
              </p>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              src={featuireImageOne}
              className="object-cover w-full h-full"
              alt="img1"
            />
          </div>
        </div>

        <div className="h-[350px] w-full grid grid-cols-2 bg-primary overflow-hidden">
          <div className="h-full w-full">
            <img
              src={featuireImageOne}
              className="object-cover w-full h-full"
              alt="img1"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2 space-y-4">
              <div className="flex gap-2 items-center">
                <h4 className="text-6xl tracking-tight font-bold text-white">
                  ACADEMICS
                </h4>
                <p className="text-purple-600 text-2xl">
                  <BsArrowRightCircle />
                </p>
              </div>
              <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                Sri Vyasa NSS College offers top quality education in various
                graduate and post graduate courses. Our experienced faculty
                members are dedicated to providing an enriching educational
                experience to our students.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[350px] w-full grid grid-cols-2 bg-primary overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2 space-y-4">
              <div className="flex gap-2 items-center">
                <h4 className="text-6xl tracking-tight font-bold text-white">
                  ACADEMICS
                </h4>
                <p className="text-purple-600 text-2xl">
                  <BsArrowRightCircle />
                </p>
              </div>
              <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                Sri Vyasa NSS College offers top quality education in various
                graduate and post graduate courses. Our experienced faculty
                members are dedicated to providing an enriching educational
                experience to our students.
              </p>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              src={featuireImageOne}
              className="object-cover w-full h-full"
              alt="img1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
