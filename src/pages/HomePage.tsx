import DishIcons from "@/components/DishIcons";
import CalenderComp from "../components/CalenderComp";
import NavBar from "../components/NavBar";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import FoodCard from "@/components/FoodCards";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFoodContext } from "@/contexts/foodContext";
import NextPageDiv from "@/components/NextPageDiv";

type foodCardProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
  id: number;
};

const cuisines = [
  "Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Japanese",
  "French",
  "Thai",
  "Greek",
];

const PopularDishes = [
  {
    name: "Biryani",
    url: "https://images.pexels.com/photos/4224304/pexels-photo-4224304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Chicken Tandoori",
    url: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Paneer Masala",
    url: "https://images.pexels.com/photos/11115801/pexels-photo-11115801.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Masala Dosa",
    url: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Aloo Gobi",
    url: "https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Gulab Jamun",
    url: "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
export default function HomePage() {
  const [dish, setDish] = useState<foodCardProps[]>([]);
  const { click } = useFoodContext();
  const fetchData = async () => {
    const res = await fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    );

    const data = await res.json();

    setDish(data.dishes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-full md:w-[99%]  bg-[#1C1C1C] h-full">
      <NavBar />
      <div className=" w-full  h-[7%] bg-[#1C1C1C] mb-[-40px] "></div>
      <CalenderComp />

      <div className=" relative top-[-70px] z-0  w-full h-[85%]  bg-white">
        <div className=" px-4 pb-2 pt-[85px] flex gap-2  md:w-[98%] m-auto  overflow-x-scroll md:justify-around">
          {cuisines.map((item) => (
            <Badge key={item} variant={"outline"}>
              {item}
            </Badge>
          ))}
        </div>

        <div className="px-4 md:w-[98%] m-auto flex flex-col gap-2 mt-3 overflow-hidden ">
          <p className=" text-xl font-bold">Popular Dishes</p>
          <div className=" w-full flex  gap-2  md:justify-around overflow-x-scroll">
            {PopularDishes.map((dish) => {
              return (
                <div key={dish.name} className=" flex-shrink-0">
                  <DishIcons key={dish.name} name={dish.name} url={dish.url} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4  flex flex-col gap-2 mt-3 h-[60%] bg-white">
          <div className="w-full md:w-[98%] m-auto flex justify-between items-center">
            <p className="  text-xl font-bold flex items-center gap-1 ">
              Recommended <ChevronDown />
            </p>
            <Button size="sm">Menu</Button>
          </div>
          <div className="flex flex-col mt-2  gap-2 overflow-y-auto ">
            {dish &&
              dish.length &&
              dish.map((item) => {
                return (
                  <FoodCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                  />
                );
              })}
            {click && <NextPageDiv />}
          </div>
        </div>
      </div>
    </div>
  );
}
