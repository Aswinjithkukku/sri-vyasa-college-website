import React from "react";

function ManagementSection() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center text-primary space-y-5 py-5">
        <h1 className="text-5xl font-semibold text-center">Management</h1>
        <p className="text-sm text-center">
          NSS Management is taking care of all the activities and maintenance of
          the installation.
        </p>
      </div>
      <div className="bg-stoneGray py-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {[1, 2, 3]?.map((item) => (
              <div
                key={item}
                className="w-full h-[300px] bg-slate-300 management relative"
              >
                <div className="absolute bottom-0 -right-5 w-11/12 bg-white text-primary py-1 px-4">
                  <p className="text-lg font-medium">G Sukumaran Nair</p>
                  <p className="text font-medium">Manager</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementSection;
