import ProductDetails from "../components/productDetails";

const imagePanels = [
  "model-front",
  "model-back",
  "model-close",
  "sweater-flat",
];

function ProductImageCard({ variant }: { variant: string }) {
  return (
    <button
      className="aspect-[4/5] bg-[var(--color-photo-bg)] transition focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
      type="button"
      aria-label={`${variant.replace("-", " ")} image`}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)]">
      <div className="bg-[var(--color-crimson)] px-4 py-5 text-sm font-medium text-white sm:px-7">
        Free Shipping on All Orders!
      </div>

      <div className="border-b border-[#dcdcdc] bg-[var(--color-lightGrey)] px-4 py-3 text-sm font-semibold text-[var(--color-crimson)] sm:px-7">
        <button
          className="hover:underline focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
          type="button"
        >
          Men&apos;s
        </button>{" "}
        &gt;{" "}
        <button
          className="hover:underline focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
          type="button"
        >
          Hoodie&apos;s and Sweatshirts
        </button>{" "}
        &gt;{" "}
        <button
          className="hover:underline focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
          type="button"
        >
          Crewnecks
        </button>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1fr_430px] lg:items-start">
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {imagePanels.map((panel) => (
            <ProductImageCard key={panel} variant={panel} />
          ))}
        </section>

        <div className="w-full pt-5">
          <ProductDetails
            isNew
            title="The H Sweater"
            price={24.99}
            size="S"
            condition="Excellent Condition"
            shop="The Harvard Shop"
            description="Discover the pinnacle of sophistication and style with The Harvard Shop's latest addition: The H Sweater! Drawing inspiration from iconic varsity knits, this garment seamlessly blends timeless elegance with unmatched comfort. Experience a touch of Harvard's excellence in every stitch."
            features={[
              "Unisex design",
              "Officially licensed Harvard University apparel",
              "Every order is meticulously crafted, expertly packaged, and sent your way by dedicated Harvard University students.",
            ]}
          />
        </div>
      </div>
    </main>
  );
}