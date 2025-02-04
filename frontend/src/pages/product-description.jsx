import React, { useEffect, useState } from "react";
import myImage from "../../public/product.jpg";
import ReactStars from "react-stars";
import { ArrowLeftRight, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import ChildComponent from "../components/child-component";

export default function ProductDescription() {

    //state in react with hooks
    //const[variable, setter] = useState(initialValue)

    const [count,setCount]= useState(0)
    console.log(count)

    //useEffect hook
    //It runs after page reload and depends upon dependency array.
    useEffect(()=>{
        console.log("useEffect is running");
    },[count]);

    //[] = dependency array

  //props in react
  //note: props can only be passed from parent to child
  //note: props cannot be changed by the child components
  const name = "BJ"


  return (
    <div className=" w-8/12 mx-auto grid grid-cols-2 space-x-4">
      <div>
      <InnerImageZoom src={myImage} />
      </div>

      <div className=" space-y-2 mt-6">
        <p className=" text-xs text-green-500 font-semibold">Snack & Munchies</p>
        <p className=" text-3xl font-semibold">Haldirams Sev Bhujia</p>
        <div className="flex items-center gap-2 mb-4">
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
        <div className="flex gap-4 mt-8">
          <Minus size={30} onClick={(e)=>setCount(count-1)} className="bg-gray-200 rounded cursor-pointer"/>
          <p className="text-xl">{count}</p>
          <Plus size={30} onClick={(e)=>setCount(count+1)} className="bg-gray-200 rounded cursor-pointer"/>
        </div>

        <div className="flex gap-4 mt-4 items-center mb-4">
        <button className="flex gap-4 bg-green-500 px-4 py-2 rounded text-white"> <ShoppingBag/> Add to cart</button>
       <div className="bg-gray-200 p-2 rounded">
       <ArrowLeftRight />
       </div>
       <div  className="bg-gray-200 p-2 rounded">
       <Heart />
       </div>
      </div>
      <hr />

      <ChildComponent name={name} />

      </div>


    





    </div>
  );
}