import React from "react";
import { about } from "../../images";

function AboutSection() {
  return (
    <div>
      <div className="py-10 max-w-screen-2xl px-2 mx-auto">
        <div className="py-10">
          <h2 className="tracking-widest text-3xl text-primary font-medium">
            About Sri Vyasa NSS College
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="w-full h-full">
            <img
              src={about}
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="">
            <div className="text-primary w-1/2 space-y-5">
              <p className="">
                Sri Vyasa College is a premier institution that provides top
                quality education for the people in the rural areas of Thrissur.
                We are committed to providing an enriching educational
                experience to our students and help them to achieve their
                academic and career goals. Our state-of-the-art infrastructure,
                experienced faculty members, and industry collaborations make us
                stand out from the rest. We offer a wide range of courses in
                various disciplines and aim to provide a holistic education to
                our students.
              </p>
              <button className="text-primary bg-hoverBlueColor px-5 py-2 font-medium">
                More About History
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stoneGray py-10 text-primary">
        <div className="text-center text-7xl font-medium uppercase py-5">
          OUR STRENGTHS
        </div>
        <div className="max-w-screen-lg mx-auto px-2 py-5">
          <div className=" grid grid-cols-3 gap-10 place-content-center">
            {["950+", "45+", "10+"]?.map((item) => (
              <div key={item} className="p-5 space-y-5">
                <p className="text-center text-7xl font-medium">{item}</p>
                <p className="text-center font-medium">
                  We enlightens over 950 families by giving quality education to
                  their younger generation{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-bgColor to-purple-100 pt-5 ">
        <div className="max-w-screen-lg mx-auto px-2">
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
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
