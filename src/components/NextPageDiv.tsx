import { useFoodContext } from "@/contexts/foodContext";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NextPageDiv() {
  const { food } = useFoodContext();

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/dish/${food?.id}`);
  };
  return (
    <div
      onClick={() => handleRoute()}
      className="w-[80%] md:w-[250px] mt-4 py-2 mb-3 rounded m-auto bg-black text-white flex items-center justify-around "
    >
      {food && <p className=" text-sm">Go to {food.name} page</p>}
      <MoveRight />
    </div>
  );
}
