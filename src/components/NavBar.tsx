import { ChevronLeft } from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-full h-[10%] px-2 pt-6 pb-4  bg-white flex items-center gap-4">
      <ChevronLeft />
      <p className="text-2xl font-semibold text-[#313131] ">Select Dishes</p>
    </div>
  );
}
