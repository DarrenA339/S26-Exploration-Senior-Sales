import Image from "next/image";

type MessageButtonProps = {
  username: string;
  imageSrc: string;
};

export default function MessageButton({
  username,
  imageSrc,
}: MessageButtonProps) {
  return (
    <button className="flex flex-row w-full border border-red-800 bg-white">
      {/* Left section */}
      {/* left div should be the username and pfp and stacked on each other */}
      <div className="flex flex-col border-r self-stretch border-red-800 p-2">
        <span className="text-red-800 font-bold text-sm">{username}</span>
        <div className=" rounded-full overflow-hidden border-2 border-black mt-1">
          <Image src={imageSrc} alt={"Profile Pic"} width={80} height={80}/> 
        </div>
      </div>
      {/* Right section */}
      {/*flex-1 allows the message/right section div to take up the rest of the available space */}
      <div className="flex-1">
        {/* message goes in here */}
        <textarea className="w-full h-full resize-none outline-none text-black placeholder-black" placeholder="Type your shit gng"/>
      </div>
    </button>
  );
}