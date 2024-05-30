import { useFoodContext } from "@/contexts/foodContext";
import fridge from "../../public/refrigerator.svg";
import { Button } from "@/components/ui/button";
type foodCardProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
  id: number;
};

export default function FoodCard({
  name,
  rating,
  description,
  image,
  id,
}: foodCardProps) {
  const context = useFoodContext();

  const handleClick = ({
    name,
    rating,
    description,
    image,
    id,
  }: foodCardProps) => {
    context?.SetFood({ name, rating, description, image, id });
    context?.setClick(true);
  };

  return (
    <div className="w-full h-[140px] py-2 flex  justify-between  border-b-2 ">
      <div className="flex flex-col  w-[60%]  gap-2  ">
        <div className="w-full flex gap-4 items-center">
          <p className=" font-bold">{name}</p>
          <div className="w-8 h-4 flex justify-center items-center text-gray-500 bg-green-300 text-[10px] rounded-sm font-bold">
            {rating}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="ms-2 w-1/3 flex mt-1  gap-3 border-e-2 border-gray">
            <img src={fridge} className=" w-5" alt="" />
            <img src={fridge} className=" w-5" alt="" />
          </div>
          <div className="w-1/2 flex flex-col">
            <p className=" text-[10px] font-bold">Ingrediants</p>
            <p className=" text-[10px] font-bold underline text-[#FF9F32] ">
              View list
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-800">{description}</p>
      </div>
      <div className="w-[30%] h-[100%] relative  overflow-hidden">
        <img
          className="w-full h-[90%] mt-2 rounded-lg -z-10"
          src={image}
          alt=""
        />
        <Button
          className="absolute bottom-0 left-6 z-20"
          size={"chef"}
          variant={"chef"}
          onClick={() => handleClick({ name, rating, description, image, id })}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
