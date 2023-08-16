import React from "react";

function EventsSection() {
  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <div className="bg-bgHBColor p-5">
        <div className="">
          <h2 className="py-10 text-3xl font-medium text-primary text-center">
            Upcoming Events
          </h2>
          <div className="md:grid grid-cols-3 gap-5 text-primary">
            <div className="w-full h-[600px] flex items-end  eventBanner border group ">
              <div className="bg-hoverBlueColor  w-full py-10 flex flex-col items-center hover:justify-center gap-5 h-52 group-hover:h-full transition-all duration-500">
                <h5 className="text-2xl md:text-3xl font-semibold ">
                  Students Union Inagruation
                </h5>
                <p className="font-medium">Fri, 25 Aug | Wadakkanchery</p>
                <button className="text-white font-medium bg-blue-600 rounded px-5 py-1">
                  RSVP
                </button>
              </div>
            </div>

            <div className="w-full h-[600px] flex items-end  eventBanner border group ">
              <div className="bg-hoverBlueColor  w-full py-10 flex flex-col items-center hover:justify-center gap-5 h-52 group-hover:h-full transition-all duration-500">
                <h5 className="text-2xl md:text-3xl font-semibold ">
                  Students Union Inagruation
                </h5>
                <p className="font-medium">Fri, 25 Aug | Wadakkanchery</p>
                <button className="text-white font-medium bg-blue-600 rounded px-5 py-1">
                  RSVP
                </button>
              </div>
            </div>

            <div className="w-full h-[600px] flex items-end  eventBanner border group ">
              <div className="bg-hoverBlueColor  w-full py-10 flex flex-col items-center hover:justify-center gap-5 h-52 group-hover:h-full transition-all duration-500">
                <h5 className="text-2xl md:text-3xl font-semibold ">
                  Students Union Inagruation
                </h5>
                <p className="font-medium">Fri, 25 Aug | Wadakkanchery</p>
                <button className="text-white font-medium bg-blue-600 rounded px-5 py-1">
                  RSVP
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
