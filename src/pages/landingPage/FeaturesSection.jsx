import React from "react";
import { featuireImageOne } from "../../images";
import { BsArrowRightCircle } from "react-icons/bs";
import Reveal from "../../components/Reveal";

function FeaturesSection() {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="py-10">
        <Reveal transition={{ delay: 0.3, duration: 0.5 }}>
          <h3 className="tracking-widest uppercase text-primary text-3xl font-medium">
            WELCOME TO SRI VYASA NSS COLLEGE
          </h3>
        </Reveal>
      </div>
      <div className="space-y-5">
        <div className="md:h-[350px] w-full grid md:grid-cols-2 bg-primary overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <div className="md:w-1/2 p-4 md:p-0 space-y-4">
              <div className="flex gap-2 items-center">
                <Reveal transition={{ delay: 0.3, duration: 1.5 }}>
                  <h4 className="text-6xl tracking-tight font-bold text-white">
                    ACADEMICS
                  </h4>
                </Reveal>
                <Reveal transition={{ delay: 0.4, duration: 1.5 }}>
                  <p className="text-purple-600 text-2xl">
                    <BsArrowRightCircle />
                  </p>
                </Reveal>
              </div>
              <Reveal transition={{ delay: 0.5, duration: 1.5 }}>
                <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                  Sri Vyasa NSS College offers top quality education in various
                  graduate and post graduate courses. Our experienced faculty
                  members are dedicated to providing an enriching educational
                  experience to our students.
                </p>
              </Reveal>
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

        <div className="md:h-[350px] w-full grid md:grid-cols-2 bg-primary overflow-hidden">
          <div className="h-full w-full order-last md:order-none">
            <img
              src={featuireImageOne}
              className="object-cover w-full h-full"
              alt="img1"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="md:w-1/2 p-4 md:p-0  space-y-4">
              <div className="flex gap-2 items-center">
                <Reveal transition={{ delay: 0.3, duration: 1.5 }}>
                  <h4 className="text-6xl tracking-tight font-bold text-white">
                    ACADEMICS
                  </h4>
                </Reveal>
                <Reveal transition={{ delay: 0.4, duration: 1.5 }}>
                  <p className="text-purple-600 text-2xl">
                    <BsArrowRightCircle />
                  </p>
                </Reveal>
              </div>
              <Reveal transition={{ delay: 0.5, duration: 1.5 }}>
                <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                  Sri Vyasa NSS College offers top quality education in various
                  graduate and post graduate courses. Our experienced faculty
                  members are dedicated to providing an enriching educational
                  experience to our students.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="md:h-[350px] w-full grid md:grid-cols-2 bg-primary overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <div className="md:w-1/2 space-y-4 p-4 md:p-0">
              <div className="flex gap-2 items-center">
                <Reveal transition={{ delay: 0.3, duration: 1.5 }}>
                  <h4 className="text-6xl tracking-tight font-bold text-white">
                    ACADEMICS
                  </h4>
                </Reveal>
                <Reveal transition={{ delay: 0.4, duration: 1.5 }}>
                  <p className="text-purple-600 text-2xl">
                    <BsArrowRightCircle />
                  </p>
                </Reveal>
              </div>
              <Reveal transition={{ delay: 0.5, duration: 1.5 }}>
                <p className="border-l-2 border-blue-600 p-2 text-sm text-white">
                  Sri Vyasa NSS College offers top quality education in various
                  graduate and post graduate courses. Our experienced faculty
                  members are dedicated to providing an enriching educational
                  experience to our students.
                </p>
              </Reveal>
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
