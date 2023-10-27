import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#4a5759] text-white capitalize flex flex-row px-[5rem] justify-evenly items-center">
        <div>
          <h1 className="font-[800]">FoodVilla</h1>
          <p>@ 2023 Bundi Technologies Pvt Ltd</p>
        </div>
        <div>
          <h1 className="font-[800]">Company</h1>
          <ul>
            <li>about</li>
            <li>careers</li>
            <li>team</li>
            <li>clothesvilla</li>
            <li>genie villat</li>
          </ul>
        </div>
        <div>
          <h1 className="font-[800]">Legal</h1>
          <ul>
            <li>privay policy</li>
            <li>Terms & Conditions</li>
            <li>Cookies Policy</li>
          </ul>
          <h1 className="font-[800]">Contact Us</h1>
          <ul>
            <li>Kya karoge humse baat karke???</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
