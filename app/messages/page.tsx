import Header from "../Components/header";
import MessagesClient from "./MessagesClient";

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <MessagesClient />
    </div>
  );
}
