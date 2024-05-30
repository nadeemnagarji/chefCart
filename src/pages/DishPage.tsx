import { useFoodContext } from "@/contexts/foodContext";
import { ChevronLeft, Clock } from "lucide-react";
import DISHIMG from "../../public/dish2.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type spice = {
  name: string;
  quantity: string;
};

type appliance = {
  name: string;
};

type vegetable = {
  name: string;
  quantity: number;
};

type dishTypeProps = {
  name: string;
  id: number;
  timeToPrepare: string;
  ingredients: {
    vegetables: vegetable[];
    spices: spice[];
    appliance: appliance[];
  };
};

export default function DishPage() {
  const { food } = useFoodContext();
  const [dish, setDish] = useState<dishTypeProps>();
  const params = useParams();

  console.log(params.id);
  const fetchData = async () => {
    const res = await fetch(
      `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${params.id}`
    );

    const data = await res.json();
    console.log(data);

    setDish(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" w-full h-full bg-white">
      <div
        className=" h-[35%] md:h-[40%]  absolute inset-0 bg-cover bg-right-bottom md:bg-center opacity-80 z-0 "
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 30%), url(${DISHIMG})`,
        }}
      ></div>
      <div className="mt-4 ml-2">
        <ChevronLeft />
      </div>
      <div className=" w-full relative  h-[30%] flex flex-col gap-2 pt-3 ps-6  ">
        <div className=" w-full flex gap-2 items-center ">
          <h1 className=" text-3xl font-extrabold m-0 p-0 z-10 md:text-5xl">
            {dish?.name}
          </h1>
          <div className="w-8 h-4 md:w-14 md:h-6  mb-1 self-end flex justify-center items-center text-gray-500 bg-green-300 text-[10px] md:text-[12px] rounded-sm font-bold">
            {food && food?.rating}
          </div>
        </div>
        <p className=" w-1/2 text-gray-700  text-sm md:text-lg mt-4 z-10">
          {food && food?.description}
        </p>
        <div className="z-10 w-[60%] flex gap-2 items-center mt-3">
          <Clock />{" "}
          <p className="z-10 text-black text-sm md:text-lg font-bold">
            {dish?.timeToPrepare}
          </p>
        </div>
      </div>
      <div className="  w-full   h-[12%] flex flex-col gap-2 pt-3 ps-6 border-b-2 ">
        <h1 className=" text-2xl  md:text-3xl font-bold m-0 p-0 z-10">
          Ingrediants
        </h1>
        <p className=" w-1/2 text-gray-500 text-[12px] md:text-lg z-10 -mt-1">
          For 2 people
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 pt-3 px-4  md:px-6">
        <h5 className=" text-lg md:text-xl font-bold m-0 p-0 z-10">
          Vegetables
        </h5>
        <div className="w-full flex flex-col gap-2 md:px-6">
          {dish?.ingredients.vegetables.map((item) => {
            return (
              <div className="w-full flex md:text-lg  items-center justify-between">
                <p>{item.name}</p> <p>{item.quantity}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 pt-3 px-4 md:px-6 ">
        <h5 className=" text-lg font-bold m-0 p-0 z-10 md:text-xl">Spices</h5>
        <div className="w-full flex flex-col gap-2 md:px-6 md:text-lg">
          {dish?.ingredients.spices.map((item) => {
            return (
              <div className="w-full flex items-center justify-between">
                <p>{item.name}</p> <p>{item.quantity}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
