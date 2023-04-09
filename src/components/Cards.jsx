import React from "react";
import Single from "../../public/assets/single.png";
import Double from "../../public/assets/double.png";
import Triple from "../../public/assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {/* item */}
        <div className="w-full flex flex-col py-4 my-4   shadow-xl rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            className="w-20 mx-auto mt-[-3rem] bg-white pb-3"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="font-bold text-4xl text-center">142$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b max-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b max-8 "> 1 Granted User</p>
            <p className="py-2 border-b max-8 ">Send uo to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md  font-medium w-[200px]  mx-auto my-6 py-3 px-6">
            Start Trail
          </button>
        </div>
        {/* item */}
        {/* item */}
        <div className="w-full flex flex-col py-4 md:my-0 my-8 bg-gray-100   shadow-xl rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            className="w-20 mx-auto mt-[-3rem] bg-transparent pb-3"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>
          <p className="font-bold text-4xl text-center">180$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b max-8 mt-8">2 TB Storage</p>
            <p className="py-2 border-b max-8 "> 2 Granted User</p>
            <p className="py-2 border-b max-8 ">Send uo to 4 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black rounded-md  font-medium w-[200px]  mx-auto my-6 py-3 px-6">
            Start Trail
          </button>
        </div>
        {/* item */}
        {/* item */}
        <div className="w-full flex flex-col py-4 my-4   shadow-xl rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            className="w-20 mx-auto mt-[-3rem] bg-white pb-3"
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="font-bold text-4xl text-center">250$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b max-8 mt-8">4 TB Storage</p>
            <p className="py-2 border-b max-8 "> 3 Granted User</p>
            <p className="py-2 border-b max-8 ">Send uo to 8 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md  font-medium w-[200px]  mx-auto my-6 py-3 px-6">
            Start Trail
          </button>
        </div>
        {/* item */}
      </div>
    </div>
  );
};

export default Cards;
