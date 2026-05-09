import Image from "next/image";
import Header from "@/app/Components/header";
import FilterCategoryImage from "@/app/Components/filterCategoryImage";
import ProductPreviewCard from "@/components/ProductPreviewCard";

const categories = [
  { label: "T-SHIRTS", imageSrc: "/T-Shirt.png" },
  { label: "PANTS", imageSrc: "/middle.png" },
  { label: "HOODIES AND SWEATSHIRTS", imageSrc: "/sweater_img.png" },
  { label: "SHOES", imageSrc: "/shoes.PNG" },
];

const products = [
  { imageSrc: "/shoes.PNG", name: "Shoes", size: "8.5", price: 30 },
  { imageSrc: "/middle.png", name: "Pants", size: "M", price: 15 },
  { imageSrc: "/sweater_img.png", name: "Sweater", size: "XL", price: 60 },
  { imageSrc: "/T-Shirt.png", name: "T-Shirt", size: "L", price: 20 },
  { imageSrc: "/shoes.PNG", name: "Boots", size: "9", price: 40 },
  { imageSrc: "/middle.png", name: "Joggers", size: "S", price: 25 },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Header />

      {/* Shipping banner */}
      <div className="bg-red-900 text-white text-sm px-6 py-2 font-medium">
        Free Shipping on All Orders!
      </div>

      {/* Page label */}
      <div className="px-6 py-2 text-sm text-gray-500">
        Mens
      </div>

      {/* Top category row */}
    {/* Top category row */}
<div className="flex justify-center gap-16 py-8 bg-white">
  {categories.map((cat) => (
    <FilterCategoryImage
      key={cat.label}
      label={cat.label}
      imageSrc={cat.imageSrc}
    />
  ))}
</div>

      {/* Filter row */}
      <div className="flex gap-3 px-8 py-4">
        {["Category", "Price", "Size"].map((filter) => (
          <select
            key={filter}
            className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none cursor-pointer"
          >
            <option>{filter}</option>
          </select>
        ))}
      </div>

      {/* Product grid */}
    <div className="px-8 pb-24 pt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {products.map((product, index) => (
      <ProductPreviewCard
        key={index}
        imageSrc={product.imageSrc}
        name={product.name}
        size={product.size}
        price={product.price}
      />
    ))}
  </div>
</div>
    </main>
  );
}