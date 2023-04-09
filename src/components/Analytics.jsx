import React from "react";
import Laptop from "../../public/assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="laptop photo"
        />
        <div className="flex flex-col md:justify-center ">
          <p className="uppercase text-[#00df9a] font-bold">
            data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
            Mange Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            odio, deserunt necessitatibus consectetur quibusdam et sit porro
            veritatis magni facilis tenetur numquam illo. Earum quia, et tempore
            dolores blanditiis molestias!
          </p>
          <button className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium md:mx-0 mx-auto py-3 md:mt-3 mt-5 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
