import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2">
          <h1 className="md:text-4xl sm:text-2xl text-2xl my-4">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sing up to our news letter abd stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] font-medium  text-black rounded-md  fnt-medium w-[250px]  ml-4 my-6 py-3 px-6">
              Notify Me
            </button>
          </div>
          <p className=" text-center sm:text-left">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
