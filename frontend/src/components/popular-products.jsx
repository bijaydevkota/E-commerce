import myImage from "../../public/petcare.jpg";
import ReactStars from "react-stars";

export default function PopularProductsSection() {
  const products = [
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldirams Sev Bhujia",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 2",
      name: "Haldirams Sev Bhujia 2",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies 3",
      name: "Haldirams Sev Bhujia 3",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchiesc4",
      name: "Haldirams Sev Bhujia 4",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 5",
      name: "Haldirams Sev Bhujia 5",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 6",
      name: "Haldirams Sev Bhujia 6",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 7",
      name: "Haldirams Sev Bhujia 7",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 8",
      name: "Haldirams Sev Bhujia 8",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 9",
      name: "Haldirams Sev Bhujia 9",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 10",
      name: "Haldirams Sev Bhujia 10",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
  ];

  return (
    <div className="w-11/12   md:w-8/12 mx-auto mt-24 space-y-8">
      <p className=" text-3xl font-semibold ">Popular Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    2xl:grid-cols-5  gap-4 ">
        {products.map((eachItem, index) => (
          <div
            key={index}
            className=" border border-gray-300 rounded-md flex  flex-col items-center justify-center  p-4 space-y-1.5  ">
            <img
              src={myImage}
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
              <p className=" font-semibold opacity-70 text-sm">4.3 (4)</p>
            </div>

            <div className=" flex items-center justify-between w-full">
              <p className=" font-semibold">
                $21.6 <span className=" opacity-70">$24</span>{" "}
              </p>
              <button className=" bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}