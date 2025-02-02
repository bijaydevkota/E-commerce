import React from "react";
import myImage from "../../public/petcare.jpg";
import ReactStars from "react-stars";

export default function ProductDescription() {
  return (
    <div className=" w-8/12 mx-auto grid grid-cols-2">
      <div>
        <img
          src={myImage}
          alt=""
        />
      </div>

      <div className=" space-y-2">
        <p className=" text-xs text-green-500 font-semibold">Snack & Munchies</p>
        <p className=" text-3xl font-semibold">Haldirams Sev Bhujia</p>
        <div className="flex items-center gap-2">
          <ReactStars
            count={5}
            size={16}
            value={4.5}
            color2={"#ffd700"}
          />
          <p className=" text-green-500 text-xs font-semibold">(4 reviews)</p>
        </div>
        <hr />

        <div className=" mt-8 space-x-4">
          <span className=" border  border-gray-400 text-gray-500 font-semibold px-4 py-2 rounded-md">250g</span>
          <span className=" border  border-gray-400 text-gray-500 font-semibold px-4 py-2 rounded-md">350g</span>
          <span className=" border  border-gray-400 text-gray-500 font-semibold px-4 py-2 rounded-md">400g</span>

        </div>


      </div>
    </div>
  );
}