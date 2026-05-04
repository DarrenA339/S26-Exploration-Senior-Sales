'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSession, logout, Session } from '../../lib/auth';

export default function Header() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // localStorage isn't available during SSR; defer setState to satisfy react-hooks/set-state-in-effect
    queueMicrotask(() => setSession(getSession()));
  }, []);

  function handleLogout() {
    logout();
    setSession(null);
    window.location.reload();
  }

  return (
    <div className="w-full">
      <div className="bg-gray-200 px-6 py-2 flex justify-end items-center">
        {session ? (
          <div className="flex items-center gap-3">
            <span className="text-[#7b1a2e] font-semibold text-sm">Hi, {session.username}</span>
            <button
              onClick={handleLogout}
              className="text-[#7b1a2e] font-semibold text-sm hover:underline cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <a
            href="/messages"
            className="flex items-center gap-2 text-[#7b1a2e] font-semibold text-sm hover:underline cursor-pointer"
          >
            <img src="/person.png" alt="person" className="w-5 h-5 object-contain" />
            <span>Sign in or Join</span>
          </a>
        )}
      </div>
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center">
        <span className="text-[#7b1a2e] font-black text-lg tracking-widest shrink-0 mr-8">
          SENIOR SALES
        </span>
        <nav className="flex items-center gap-5 shrink-0">
          {["Women's", "Men's", "Furniture", "Decor", "Electronics", "Miscellaneous"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#7b1a2e] font-bold text-sm hover:underline cursor-pointer whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 gap-2 flex-1 mx-6">
          <img src="/search.png" alt="search" className="w-4 h-4 object-contain shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none text-sm text-gray-400 bg-transparent w-full"
          />
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" aria-label="Home" className="inline-flex shrink-0">
            <img src="/shield.png" alt="" className="w-7 h-7 object-contain cursor-pointer hover:opacity-70" />
          </Link>
          <a href="/messages">
            <img src="/chat.png" alt="chat" className="w-6 h-6 object-contain cursor-pointer hover:opacity-70" />
          </a>
          <img src="/bag.png" alt="bag" className="w-6 h-6 object-contain cursor-pointer hover:opacity-70" />
          <button
            type="button"
            className="bg-[#7b1a2e] text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-80 cursor-pointer whitespace-nowrap"
          >
            Sell Now
          </button>
        </div>
      </div>
    </div>
  );
}
