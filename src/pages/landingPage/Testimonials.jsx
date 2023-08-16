import React from "react";
import Reveal from "../../components/Reveal";

function Testimonials() {
  return (
    <div className="px-2 max-w-screen-2xl mx-auto py-10 ">
      <div className="md:flex">
        <div className="md:w-1/2 text-primary ">
          <div className="md:w-1/2 space-y-3">
            <Reveal
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.5, duration: 3 }}
            >
              <p className="font-medium tracking-widest text-3xl">Our Alumni</p>
            </Reveal>
            <Reveal>
              <h1 className="font-bold text-6xl md:text-7xl">Testimonials</h1>
            </Reveal>
            <Reveal
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.5, duration: 3 }}
            >
              <p className="text-sm font-medium pt-5">
                Our alumni have excelled in their respective fields and have
                made us proud. Here are some of the testimonials from our
                alumni.
              </p>
            </Reveal>
            <div className="w-full flex justify-end">
              <Reveal
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ delay: 0.5, duration: 3 }}
              >
                <button className="bg-transparent border px-7 tracking-wider py-1 text-purple-300 capitalize font-semibold text-xl">
                  Read More
                </button>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 parallax ">
          <Reveal>
            <div className="h-[600px] relative">
              <div className="bg-black/70 text-white p-10 absolute bottom-0 md:-left-52 w-[400px] space-y-3 font-semibold">
                <p className="text-blue-600 text-3xl">Tracy Vera</p>
                <p className="text-sm">
                  “Sri Vyasa College provided me with the perfect platform to
                  pursue my dreams. The faculty members were very supportive and
                  helped me to achieve my academic and career goals. Thank you
                  Sri Vyasa College for everything!”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="md:grid grid-cols-3 my-20">
        {[1, 2, 3]?.map((item) => (
          <div key={item} className=" w-full alumnis ">
            <Reveal>
              <div className="relative h-[700px]">
                <div className="absolute -bottom-10 left-0 md:w-[250px] space-y-5 p-7 bg-darkColor">
                  <p className="text-blue-600 text-3xl font-semibold">
                    Francisca Coyle
                  </p>
                  <p className="leading-relaxed font-medium text-white">
                    “Sri Vyasa College provided me with the perfect platform to
                    pursue my dreams. The faculty members were very supportive
                    and helped me to achieve my academic and career goals. Thank
                    you Sri Vyasa College for everything!”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
