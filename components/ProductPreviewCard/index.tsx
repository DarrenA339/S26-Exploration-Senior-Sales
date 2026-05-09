import Image from "next/image";

type ProductPreviewCardProps = {
  imageSrc: string;
  name: string;
  size: string;
  price: number;
};

export default function ProductPreviewCard({
  imageSrc,
  name,
  size,
  price,
}: ProductPreviewCardProps) {
  return (
    <div className="bg-white w-full">
      {/* Product image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom text row */}
      <div className="pt-3 pb-4 px-3">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-red-900">{name}</p>
          <p className="text-xl font-bold text-red-900">${price}</p>
        </div>
        <p className="text-xl font-bold text-red-900">{size}</p>
      </div>
    </div>
  );
}