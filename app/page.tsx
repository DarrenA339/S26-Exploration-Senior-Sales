import ProductPreviewCard from "@/components/ProductPreviewCard";

const products = [
  { imageSrc: "/shoes.PNG", name: "Shoes", size: "8.5", price: 30 },
  { imageSrc: "/shoes.PNG", name: "Pants", size: "M", price: 15 },
  { imageSrc: "/shoes.PNG", name: "Sweater", size: "XL", price: 60 },
  { imageSrc: "/shoes.PNG", name: "Jacket", size: "L", price: 50 },
  { imageSrc: "/shoes.PNG", name: "Hat", size: "S", price: 10 },
  { imageSrc: "/shoes.PNG", name: "Boots", size: "9", price: 40 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
