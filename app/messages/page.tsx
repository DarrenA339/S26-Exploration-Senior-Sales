const chats = [
  {
    seller: "Bacon Hair 67",
    preview: "The H Sweater is so tough bro...",
    date: "04/26/2026",
  },
];

export default function MessagesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-[var(--foreground)]">
      <div className="bg-[var(--color-crimson)] px-6 py-5 text-sm font-medium text-white sm:px-8">
        Free Shipping on All Orders!
      </div>

      <section className="border-b border-[#d7d7d7] px-6 py-8 sm:px-10">
        <div className="flex items-end gap-7">
          <h1 className="text-[34px] font-black leading-none tracking-tight text-[var(--color-crimson)]">
            Messages
          </h1>
          <p className="pb-1 text-base font-medium text-[#2f1f1f]">
            Chat with All Sellers!
          </p>
        </div>

        <div className="mt-8 flex gap-14 text-sm font-black text-black">
          <button
            className="focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
            type="button"
          >
            All Chats
          </button>
          <button
            className="focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
            type="button"
          >
            Unread Chats
          </button>
        </div>
      </section>

      <section className="grid flex-1 grid-cols-1 md:grid-cols-[258px_1fr]">
        <aside className="border-b border-[#d0d0d0] md:border-b-0 md:border-r">
          {chats.map((chat) => (
            <button
              key={chat.seller}
              className="flex h-[72px] w-full gap-4 border-b border-[#dcdcdc] px-4 py-3 text-left transition hover:bg-[#f7f7f7] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
              type="button"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-black bg-white text-[18px] font-black text-black">
                BH
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold text-black">
                  {chat.seller}
                </span>
                <span className="block truncate text-xs text-[#777777]">
                  {chat.preview}
                </span>
                <span className="block text-xs text-[#777777]">{chat.date}</span>
              </span>
            </button>
          ))}
        </aside>

        <div className="flex min-h-[620px] flex-col">
          <div className="relative flex flex-1 flex-col px-6 py-10 sm:px-12">
            <p className="text-center text-2xl font-medium text-[#777777]">
              Today&nbsp; 9:16 AM
            </p>

            <div className="mt-auto flex flex-col items-end gap-7 pb-8">
              <p className="relative max-w-[640px] rounded-t-2xl rounded-bl-2xl bg-[#0b6fb8] px-8 py-4 text-[28px] leading-tight text-white after:absolute after:bottom-0 after:right-[-10px] after:h-0 after:w-0 after:border-b-[12px] after:border-l-[12px] after:border-b-[#0b6fb8] after:border-l-transparent">
                The H Sweater is so tough bro! Could I buy it off you?
              </p>
              <span className="pr-2 text-base font-medium text-[#696969]">
                9:16 AM
              </span>
            </div>
          </div>

          <form className="flex h-[136px] items-center border-t border-[#d0d0d0] px-6 sm:px-12">
            <label className="sr-only" htmlFor="message">
              Type your message
            </label>
            <input
              id="message"
              className="min-w-0 flex-1 text-[28px] text-[#555555] outline-none placeholder:text-[#666666]"
              placeholder="Type your message..."
              type="text"
            />
            <button
              className="ml-6 text-[46px] font-black leading-none text-[#686868] transition hover:text-[var(--color-crimson)] focus:outline-none focus:ring-4 focus:ring-[#e9b4b4]"
              aria-label="Send message"
              type="submit"
            >
              &gt;
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
