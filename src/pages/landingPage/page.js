import React from "react";
import { heroImage } from "../../images";
import FeaturesSection from "./FeaturesSection";
import EventsSection from "./EventsSection";
import CardSection from "./CardSection";
import Testimonials from "./Testimonials";
import ManagementSection from "./ManagementSection";
import AboutSection from "./AboutSection";

function LandingPageIndex() {
  return (
    <div>
      <div className="h-[700px] relative">
        <div className="absolute bottom-5 w-full ">
          <div className="max-w-screen-2xl mx-auto px-2 text-white space-y-2">
            <p className="text-5xl font-semibold">
              Learn, Explore, Achieve with
            </p>
            <p className="text-7xl font-bold -tracking-wide">
              Sri Vyasa NSS College
            </p>
          </div>
        </div>
        <img
          src={heroImage}
          alt="sri vyasa"
          className="w-full h-full object-cover"
        />
      </div>
      <FeaturesSection />
      <div className="max-w-screen-lg mx-auto py-10">
        <div className="bg-hoverBlueColor hover:bg-primary transition-all duration-700 text-purple-700 flex justify-center items-center h-14 w-full">
          Important Links :
        </div>
      </div>
      <EventsSection />
      <CardSection />
      <Testimonials />
      <ManagementSection/>
      <AboutSection/>
    </div>
  );
}

export default LandingPageIndex;
