import React from "react";
import image from "../Assets/image.jpg";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import image6 from "../Assets/image6.jpg";
import image7 from "../Assets/image8.jpg";

const TrendingNow = () => {
  return (
    <div className='flex w-auto overflow-x-auto   gap-4 py-2 bg-black rounded h-48 border-gray-300  p-4'>
      <img className="rounded-[10px] w-[50%]" src={image} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image1} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image2} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image3} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image4} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image5} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image6} alt="1"/>
      <img className="rounded-[10px] w-[50%]"  src={image7} alt="1"/>


    </div>
  )
}

export default TrendingNow