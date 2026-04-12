import ProductDetails from "../components";

function ProductImageCard() {
  return (
    <div className="aspect-[4/5] border border-[#ece6de] bg-[var(--color-photo-bg)]" />
  );
}

const imagePanels = [1, 2, 3, 4];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--background)]">
      <div className="bg-[var(--color-darkGrey)] px-6 py-3 text-sm font-medium text-white">
        Free Shipping on All Orders!
      </div>

      <div className="border-b border-[#dcdcdc] bg-[var(--color-lightGrey)] px-6 py-4 text-sm font-semibold text-[var(--color-crimson)]">
        Men&apos;s &gt; Hoodie&apos;s and Sweatshirts &gt; Crewnecks
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-8 lg:flex-row lg:items-start">
        <section className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {imagePanels.map((panel) => (
            <ProductImageCard key={panel} />
          ))}
        </section>

        <div className="w-full lg:max-w-[390px]">
          <ProductDetails
            isNew
            title="Nishal"
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
