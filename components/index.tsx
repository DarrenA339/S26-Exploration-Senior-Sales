type ProductDetailsProps = {
  isNew?: boolean;
  title: string;
  price: number;
  size: string;
  condition: string;
  shop: string;
  description: string;
  features: string[];
};

export default function ProductDetails({
  isNew,
  title,
  price,
  size,
  condition,
  shop,
  description,
  features,
}: ProductDetailsProps) {
  return (
    <section className="flex w-full max-w-[360px] flex-col gap-6 text-[var(--foreground)]">
      {isNew && (
        <div className="w-fit rounded-full bg-[var(--color-crimson)] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
          New!
        </div>
      )}

      <div className="space-y-2">
        <h1 className="text-3xl font-medium leading-tight">{title}</h1>
        <p className="text-4xl font-bold text-black">${price.toFixed(2)}</p>
      </div>

      <p className="text-lg leading-relaxed text-[#333333]">
        <span>Size {size}</span>
        <span className="px-2">•</span>
        <span>{condition}</span>
        <span className="px-2">•</span>
        <a className="underline underline-offset-2" href="#">
          {shop}
        </a>
      </p>

      <div className="flex flex-col gap-4">
        <button className="border border-[var(--color-crimson)] bg-[var(--color-crimson)] px-6 py-4 text-2xl font-bold text-white transition hover:brightness-95">
          Buy Now
        </button>

        <div className="grid grid-cols-2 gap-4">
          <button className="border-2 border-[var(--color-crimson)] bg-white px-4 py-3 text-lg font-semibold text-[var(--color-crimson)] transition hover:bg-[#fff8f8]">
            DM Owner
          </button>
          <button className="border-2 border-[var(--color-crimson)] bg-white px-4 py-3 text-lg font-semibold text-[var(--color-crimson)] transition hover:bg-[#fff8f8]">
            Add to bag
          </button>
        </div>
      </div>

      <div className="space-y-5 text-[18px] leading-snug text-[#2f2f2f]">
        <p>{description}</p>

        <ul className="list-disc space-y-1 pl-6">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
