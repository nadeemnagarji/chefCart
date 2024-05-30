export default function DishIcons({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <div className="w-16 h-16 border-[#FFB766] border rounded-full flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-50"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <span className="text-white text-sm text-center font-medium z-10">
        {name}
      </span>
    </div>
  );
}

/*


*/
