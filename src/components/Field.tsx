import React, { useRef } from "react";
import { useAppDispatch } from "../hooks";

const Field: React.FC = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (todoRef.current) {
      let value = todoRef.current?.value;
      if (value) {
        dispatch({ type: "add", payload: `${value}` });
      }
      todoRef.current.value = "";
    }
  };
  return (
    <div className="grid h-[50px] w-full grid-cols-4 gap-1 rounded-lg bg-gray-200 p-1">
      <input
        type="text"
        placeholder="Enter text"
        className="backdrop-grayscale-lg col-span-3 rounded-md border border-gray-300 px-1 outline-none"
        ref={todoRef}
      />
      <button
        className="rounded-md border border-gray-300 bg-white"
        onClick={handleAdd}
      >
        Add todo
      </button>
    </div>
  );
};

export default Field;
