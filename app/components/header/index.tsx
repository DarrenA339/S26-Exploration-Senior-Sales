export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-gray-200 px-6 py-2 flex justify-end items-center">
        <button className="flex items-center gap-2 text-[#7b1a2e] font-semibold text-sm hover:underline cursor-pointer">
          <img src="/person.png" alt="person" className="w-5 h-5 object-contain" />
          <span>Sign in or Join</span>
        </button>
      </div>

      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center">

        {/* Logo */}
        <span className="text-[#7b1a2e] font-black text-lg tracking-widest shrink-0 mr-8">
          SENIOR SALES
        </span>

        {/* Nav links */}
        <nav className="flex items-center gap-5 shrink-0">
          {["Women's", "Men's", "Furniture", "Decor", "Electronics", "Miscellaneous"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[#7b1a2e] font-bold text-sm hover:underline cursor-pointer whitespace-nowrap"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Search bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 gap-2 flex-1 mx-6">
          <img src="/search.png" alt="search" className="w-4 h-4 object-contain shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none text-sm text-gray-400 bg-transparent w-full"
          />
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3 shrink-0">
          <img src="/shield.png" alt="shield" className="w-7 h-7 object-contain cursor-pointer hover:opacity-70" />
          <img src="/chat.png" alt="chat" className="w-6 h-6 object-contain cursor-pointer hover:opacity-70" />
          <img src="/bag.png" alt="bag" className="w-6 h-6 object-contain cursor-pointer hover:opacity-70" />
        </div>

      </div>
    </div>
  );
}