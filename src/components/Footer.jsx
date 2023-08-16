import React from "react";

function Footer() {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-2xl mx-auto pt-20 px-2">
        <div className="md:grid grid-cols-3 gap-10 place-items-center text-white divide-y space-y-4 md:space-y-0 md:divide-y-0">
          <div className="">
            <h5 className="py-5 text-3xl text-center tracking-[10px] font-medium">Address</h5>
            <p className="font-medium text-center">500 Terry Francine Street</p>
            <p className="font-medium text-center">San Francisco, CA 94158</p>
          </div>
          <div className="">
            <h5 className="py-5 text-3xl text-center tracking-[10px] font-medium">Contact</h5>
            <p className="font-medium text-center">Email: info@mysite.com</p>
            <p className="font-medium text-center">Tel: 123-456-7890</p>
          </div>
          <div className="">
            <h5 className="py-5 text-3xl text-center tracking-[10px] font-medium">Follow us</h5>
            <p className="font-medium text-center">Facebook</p>
            <p className="font-medium text-center">Instagram</p>
          </div>
        </div>
        <div className="text-center uppercase font-medium text-white pt-20">
          SRI VYASA NSS COLLEGE
        </div>
      </div>
    </div>
  );
}

export default Footer;
