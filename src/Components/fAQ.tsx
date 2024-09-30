import "./css/fAQ.css";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  return (
    <div className="bg-black ">
      <h1 className="text-white mx-8 pl-[20px]">Frequently Asked Questions </h1>
      <div className="">
        <div className="realFAQ px-5 mx-12  mb-3 h-10"><span>What is Netflix?</span> <FaPlus /> </div>
        <div className="realFAQ px-5 mx-12 mb-3 h-10">How much does Netflix cost? <FaPlus /></div>
        <div className="realFAQ px-5 mx-12 mb-3 h-10">How much does Netflix cost? <FaPlus /></div>
        <div className="realFAQ px-5 mx-12 mb-3 h-10">Where can i watch ? <FaPlus /></div>
        <div className="realFAQ px-5 mx-12 mb-3 h-10">How do i cancel? <FaPlus /></div>
        <div className="realFAQ px-5 mx-12 mb-3 h-10">What do i watch on Netflix <FaPlus /></div>
        <div className="realFAQ px-5 mx-12  h-10">Is Netflix good for Kids <FaPlus /></div>

      </div>
    </div>
  );
};

export default FAQ;
