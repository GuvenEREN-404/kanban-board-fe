"use client"
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Board } from "@/data/board";

export default function Home() {
  const router = useRouter()

  const createBoard = () => {
    // Generates a new unique identifier for the board
    const createdNewBoardId = uuidv4();
    
    // Saves the board object in localStorage with the new board ID as the key
    localStorage.setItem(`${createdNewBoardId}`, JSON.stringify(Board));
    
    // Navigates to the new board's URL using the new board ID
    router.push(`/${createdNewBoardId}`);
}

  return (
    <div className="grid place-items-center ">
      <div
        onClick={() => { createBoard() }}
        className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[20%] opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
      >
        Add Board
      </div>
    </div>
  );
}
