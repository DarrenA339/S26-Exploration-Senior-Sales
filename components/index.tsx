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
    <section className="flex w-full flex-col gap-7 text-[var(--foreground)]">
      {isNew && (
        <div className="w-fit rounded-full bg-[var(--color-crimson)] px-5 py-3 text-sm font-black uppercase tracking-wide text-white">
          New!
        </div>
      )}

      <div className="space-y-1">
        <h1 className="text-[25px] font-medium leading-tight sm:text-[28px]">
          {title}
        </h1>
        <p className="text-[28px] font-black leading-tight text-black">
          ${price.toFixed(2)}
        </p>
      </div>

      <p className="text-[18px] leading-relaxed text-[#222222] sm:text-[20px]">
        <span>Size {size}</span>
        <span className="px-2">•</span>
        <span>{condition}</span>
        <span className="px-2">•</span>
        <button
          className="underline underline-offset-2 transition hover:text-[var(--color-crimson)] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
          type="button"
        >
          {shop}
        </button>
      </p>

      <div className="flex flex-col gap-4">
        <button
          className="bg-[var(--color-crimson)] px-6 py-4 text-center text-2xl font-bold text-white transition hover:bg-[#730202] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
          type="button"
        >
          Buy Now
        </button>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="border-2 border-[var(--color-crimson)] bg-white px-4 py-3 text-center text-lg font-semibold text-[var(--color-crimson)] transition hover:bg-[#fff8f8] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
            type="button"
          >
            DM Owner
          </button>
          <button
            className="border-2 border-[var(--color-crimson)] bg-white px-4 py-3 text-center text-lg font-semibold text-[var(--color-crimson)] transition hover:bg-[#fff8f8] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
            type="button"
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="space-y-6 text-[20px] leading-[1.15] text-[#1f1f1f] sm:text-[23px]">
        <p>{description}</p>

        <ul className="list-disc space-y-1 pl-8">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
