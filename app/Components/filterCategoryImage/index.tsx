import Image from "next/image";

type FilterCategoryImageProps = {
  label: string;
  imageSrc: string;
};

export default function FilterCategoryImage({label, imageSrc}: FilterCategoryImageProps) {
  return (
    <div className="inline-flex flex-col items-center">
      <button className="w-64 h-64 overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
        <img src={imageSrc} alt={label} className="w-full h-full object-cover"/>
      </button>

      {/* Label */}
      <div className="mt-2 text-lg text-black font-semibold text-center">
        {label}
      </div>
    </div>
  );
}