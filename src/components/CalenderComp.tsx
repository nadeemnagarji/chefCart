import { Calendar, Clock } from "lucide-react";
import DatePickerDemo from "@/components/DatePicker.tsx";
import TimePicker from "./TimePicker";

export default function CalenderComp() {
  return (
    <div className="xsm:w-[90%]  sm:w-[500px] w-[96%] px-1 flex justify-between m-auto py-4 rounded-lg  bg-white border border-[#F9F9F9] shadow-lg z-10 relative ">
      <div className=" pe-2  xsm:px-2 xsm:font-bold w-1/2 xsm flex gap-2 text-sm font-semibold items-center border-e-2 xsm:text-md sm:justify-center ">
        <DatePickerDemo />
      </div>
      <div className="  w-1/2 ps-2 flex text-sm gap-2 font-semibold xsm:font-bold items-center  xsm:text-md sm:justify-center">
        <TimePicker />
      </div>
    </div>
  );
}
