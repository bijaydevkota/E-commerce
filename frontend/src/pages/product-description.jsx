import myImage from "../../public/product.jpg";
import ReactStars from "react-stars";
import { ArrowLeftRight, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import ChildComponent from "../components/child-component";

export default function ProductDescription() {
  //  State in react with hooks
  // const [variable, setter]=useSate(initialValue)
  const [count, setCount] = useState(5);
  console.log(count);

  // usEffect hook
  // Its runs after the page reloads and depends upon dependency array.
  useEffect(() => {
    console.log("useEffect is running");
  }, [count]);


  // [] ==> dependency array

  // Props (properties) in react
  // Props can only be passed from parent to child
  // Props cannot be changed by the child component
  const name = "Bijay Devkota";

  return (
    <div className=" w-8/12 mx-auto grid grid-cols-2 gap-12 mt-8">
      <div className="border border-gray-300 rounded ">
        {/* <img
          src={myImage}
          alt=""
        /> */}
        <InnerImageZoom src={myImage} />
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

        <div className=" flex items-center gap-1 mt-8">
          <Minus
            size={38}
            className=" bg-gray-300 rounded-md cursor-pointer  "
            onClick={(e) => setCount(count - 1)}
          />
          <p>{count}</p>
          <Plus
            size={38}
            className="bg-gray-300 rounded-md cursor-pointer"
            onClick={(e) => setCount(count + 1)}
          />
        </div>

        <div className=" flex items-center gap-4 mt-8 ">
          <button className=" flex  items-center gap-2 bg-green-500 px-4 py-2 text-white font-semibold">
            {" "}
            <ShoppingBag /> Add to cart{" "}
          </button>
          <div className=" bg-gray-200 p-2 rounded-md ">
            <ArrowLeftRight size={36} />
          </div>

          <div className="bg-gray-200 p-2 rounded-md">
            <Heart size={36} />
          </div>
        </div>

        <hr />

        <ChildComponent name={name} />
        <ChildComponent name={"Compant"} />
        <ChildComponent name="Blogs" />
      </div>
    </div>
  );
}