import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const values = [
  "9.30-10.30",
  "10.30-11.30",
  "11.30-12.30",
  "12.30-13.30",
  "13.30-14.30",
  "14.30-15.30",
  "15.30-16.30",
  "16.30-17.30",
  "17.30-18.30",
  "18.30-19.30",
  "19.30-20.30",
  "20.30-21.30",
  "21.30-22.30",
  "22.30-23.30",
  "23.30-00.30",
];
export default function TimePicker() {
  return (
    <Select>
      <SelectTrigger className="w-full sm:w-[150px]">
        <SelectValue placeholder="Pick a Time" />
      </SelectTrigger>
      <SelectContent>
        {values.map((item) => (
          <SelectItem value={item}>{item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
