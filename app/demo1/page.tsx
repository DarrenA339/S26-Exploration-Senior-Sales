"use client"; {/* only do this with compoenents not a whole page */}
import { useState } from "react";

export default function Demo1() {
    const [count, setCount] = useState(0);
    const[open, setIsOpen] = useState(false);

    return(
        <div className="m-4 text-black">
            <div> Count: {count}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer" onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    )
}