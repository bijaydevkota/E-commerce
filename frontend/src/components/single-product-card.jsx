import { NavLink } from "react-router";
import ReactStars from "react-stars";

export default function SingleProductCard({eachItem}) {
  "/shop/{eachItem.id}"
  return (
    <div>
      <NavLink to={`/shop/${eachItem.name}`} className=" border border-gray-300 rounded-md flex  flex-col items-center justify-center  p-4 space-y-1.5  ">
        <img
          src={eachItem.image}
          alt=""
        />
        <p className=" font-semibold opacity-50 text-xs">{eachItem.category}</p>
        <p className=" font-semibold text-sm">{eachItem.name}</p>
        <div className=" flex items-center gap-2">
          <ReactStars
            count={5}
            size={16}
            value={4.5}
            color2={"#ffd700"}
          />
          <p className=" font-semibold opacity-70 text-sm">{eachItem.rating} (4)</p>
        </div>

        <div className=" flex items-center justify-between w-full">
          <p className=" font-semibold">
            {eachItem.previousPrice} <span className=" opacity-70 ">{eachItem.price}</span>{" "}
          </p>
          <button className=" bg-orange-500 text-white font-semibold rounded-md px-4 py-1 text-xs">Add</button>
        </div>
      </NavLink>
    </div>
  );
}