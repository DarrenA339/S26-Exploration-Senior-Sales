import Header from "../Components/header";
import MessagesClient from "./MessagesClient";

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="bg-red-800 text-white text-left px-4 py-2 text-sm shrink-0">
        Free Shipping on All Orders!
      </div>
      <div className="px-6 py-3 shrink-0">
        <span className="text-red-800 font-bold text-2xl">Messages</span>
        <span className="text-red-800 text-sm ml-2">Chat with All Sellers!</span>
      </div>
      <MessagesClient />
    </div>
  );
}
