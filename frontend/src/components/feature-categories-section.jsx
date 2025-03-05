import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import myImage from "../../public/petcare.jpg";


const categories=[
    {
        image: myImage,
        name: "Pet Care",     
    },
    {
        image: myImage,
        name: "Biscuit 1",     
    },
    {
        image: myImage,
        name: "Biscuit 3",     
    },
    {
        image: myImage,
        name: "Biscuit 4",     
    },
    {
        image: myImage,
        name: "Biscuit 5",     
    },
    {
        image: myImage,
        name: "Biscuit 6",     
    },
    {
        image: "",
        name: "Biscuit 7",     
    },


]

export default function FeatureCategoriesSection() {
//Usestate hooks
const[name, setName] = useState("Bijay Devkota")
console.log(name)

const handleChangeName =()=>{
  setName("Bijay Devkota changed")
}

  return (
    <div className="w-8/12 mx-auto space-y-8 mt-8">
      {name}
      <button className="bg-green-500"
      onClick={handleChangeName}
      >change name
      </button>
      <p className="text-2xl font-semibold">Featured Categories</p>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

            {
                categories.map((item,index)=>(
                    <SwiperSlide key={index}>
                    <div className="border overflow-hidden border-gray-400 rounded-xl flex flex-col space-y-2 items-center justify-center hover:border-green-500 hover:shadow-2xl duration-1000">
                      <img src={item.image} alt="category" 
                      height={150}
                      width={150}
                      />
                      <p className="font-semibold">{item.name}</p>
                    </div>
                  </SwiperSlide>
                ))
            } 
        </Swiper>
      </div>
    </div>
  );
}
