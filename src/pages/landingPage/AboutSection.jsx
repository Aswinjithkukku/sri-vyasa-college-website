import React from "react";
import { about } from "../../images";
import Reveal from "../../components/Reveal";

function AboutSection() {
  return (
    <div>
      <div className="py-10 max-w-screen-2xl px-2 mx-auto">
        <div className="py-10">
          <h2 className="md:tracking-widest text-3xl text-primary font-medium">
            About Sri Vyasa NSS College
          </h2>
        </div>
        <div className="md:grid grid-cols-2 gap-20">
          <div className="w-full h-full">
            <img
              src={about}
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
          <Reveal>
            <div className="">
              <div className="text-primary md:w-1/2 space-y-5">
                <p className="">
                  Sri Vyasa College is a premier institution that provides top
                  quality education for the people in the rural areas of
                  Thrissur. We are committed to providing an enriching
                  educational experience to our students and help them to
                  achieve their academic and career goals. Our state-of-the-art
                  infrastructure, experienced faculty members, and industry
                  collaborations make us stand out from the rest. We offer a
                  wide range of courses in various disciplines and aim to
                  provide a holistic education to our students.
                </p>
                <button className="text-primary bg-hoverBlueColor px-5 py-2 font-medium">
                  More About History
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-stoneGray py-10 text-primary">
        <Reveal
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <div className="text-center text-6xl md:text-7xl font-medium uppercase py-5">
            OUR STRENGTHS
          </div>
        </Reveal>
        <div className="max-w-screen-lg mx-auto px-2 py-5">
          <div className=" md:grid grid-cols-3 gap-10 place-content-center">
            {["950+", "45+", "10+"]?.map((item) => (
              <Reveal
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ delay: 0.5, duration: 3 }}
              >
                <div key={item} className="p-5 space-y-5">
                  <p className="text-center text-7xl font-medium">{item}</p>
                  <p className="text-center font-medium">
                    We enlightens over 950 families by giving quality education
                    to their younger generation{" "}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-bgColor to-purple-100 pt-5 ">
        <div className="max-w-screen-lg mx-auto px-2">
          <Reveal
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.5, duration: 3 }}
          >
            <div className="w-full h-[450px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pwMw3eApmmQ?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="py-20 max-w-screen-lg mx-auto px-2">
        <Reveal
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-primary space-y-7">
            <p className="text-2xl tracking-[10px] font-medium text-center">
              Contact Sri Vyasa NSS College
            </p>
            <h2 className="tracking-wide text-7xl font-semibold text-center">
              Have Questions?
            </h2>
            <p className="text-sm font-medium text-center">
              Get in Touch with Us
            </p>
            <div className="grid grid-cols-2 border border-primary">
              <div className="w-full border border-primary h-14">
                <input
                  className="w-full h-full outline-none ring-0 bg-transparent px-4 hover:bg-blue-700 placeholder:italic placeholder:text-xs placeholder:text-gray-600 "
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full border border-primary h-14">
                <input
                  className="w-full h-full outline-none ring-0 bg-transparent px-4 hover:bg-blue-700 placeholder:italic placeholder:text-xs placeholder:text-gray-600 "
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full border border-primary h-14">
                <input
                  className="w-full h-full outline-none ring-0 bg-transparent px-4 hover:bg-blue-700 placeholder:italic placeholder:text-xs placeholder:text-gray-600 "
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="w-full border border-primary h-14">
                <input
                  className="w-full h-full outline-none ring-0 bg-transparent px-4 hover:bg-blue-700 placeholder:italic placeholder:text-xs placeholder:text-gray-600 "
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="col-span-2 border border-primary h-32">
                <textarea
                  className="w-full h-full bg-transparent p-4 hover:bg-blue-700 placeholder:italic placeholder:text-xs placeholder:text-gray-600  outline-none ring-0"
                  placeholder="Type your message here..."
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-purple-300 font-semibold text-xl py-1 px-4 bg-transparent border-2 border-gray-400 shadow-md hover:bg-gray-300">
                Send Message
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default AboutSection;
