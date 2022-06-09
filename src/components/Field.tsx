import React, { useRef } from "react";
import { useAppDispatch } from "../hooks"; 

const Field: React.FC = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch({ type: "add", payload: `${todoRef.current?.value}` })
    if(todoRef.current) {
      todoRef.current.value = "";
    }
  }
  return (
    <div className="w-full h-[50px] bg-gray-200 rounded-lg p-1 grid grid-cols-4 gap-1">
      <input
        type="text"
        placeholder="Enter text"
        className="col-span-3 px-1 rounded-md outline-none backdrop-grayscale-lg border border-gray-300"
        ref={todoRef}
		/>
      <button className="bg-white rounded-md" onClick={handleAdd}>Add todo</button>
    </div>
  );
};

export default Field;
