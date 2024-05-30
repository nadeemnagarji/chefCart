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

type spices = spice[];

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
        className=" h-[35%]  absolute inset-0 bg-cover bg-right-bottom opacity-80 z-0 "
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 30%), url(${DISHIMG})`,
        }}
      ></div>
      <div className="mt-4 ml-2">
        <ChevronLeft />
      </div>
      <div className=" w-full relative  h-[30%] flex flex-col gap-2 pt-3 ps-6  ">
        <div className=" w-full flex gap-2 items-center shadow-sm">
          <h1 className=" text-3xl font-extrabold m-0 p-0 z-10">
            {dish?.name}
          </h1>
          <div className="w-8 h-4 mb-1 self-end flex justify-center items-center text-gray-500 bg-green-300 text-[10px] rounded-sm font-bold">
            {food.rating}
          </div>
        </div>
        <p className=" w-1/2 text-gray-700 text-sm z-10">{food.description}</p>
        <div className="z-10 w-[60%] flex gap-2 items-center mt-3">
          <Clock />{" "}
          <p className="z-10 text-black text-sm font-bold">
            {dish?.timeToPrepare}
          </p>
        </div>
      </div>
      <div className="  w-full   h-[12%] flex flex-col gap-2 pt-3 ps-6 border-b-2 ">
        <h1 className=" text-2xl font-bold m-0 p-0 z-10">Ingrediants</h1>
        <p className=" w-1/2 text-gray-500 text-[12px] z-10 -mt-1">
          For 2 people
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 pt-3 px-4 ">
        <h5 className=" text-lg font-bold m-0 p-0 z-10">Vegetables</h5>
        <div className="w-full flex flex-col gap-2">
          {dish?.ingredients.vegetables.map((item) => {
            return (
              <div className="w-full flex items-center justify-between">
                <p>{item.name}</p> <p>{item.quantity}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 pt-3 px-4 ">
        <h5 className=" text-lg font-bold m-0 p-0 z-10">Spices</h5>
        <div className="w-full flex flex-col gap-2">
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
