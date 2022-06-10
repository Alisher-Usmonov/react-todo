import React from "react";
import { useAppSelector } from "../hooks";
import ListItem from "./ListItem";

const List: React.FC = () => {
  const state = useAppSelector((state) => state);
  return (
    <ul
      className={`flex h-[432px] w-full flex-col  gap-1 rounded-lg bg-gray-200 p-1 ${
        state.length > 6
          ? "overflow-y-scroll scrollbar scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-700"
          : ""
      }`}
    >
      {state.map((todo) => (
        <ListItem {...todo} />
      ))}
    </ul>
  );
};

export default List;
