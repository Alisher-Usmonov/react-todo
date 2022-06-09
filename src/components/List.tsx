import React from "react";
import { useAppSelector } from "../hooks";
import ListItem from "./ListItem";

const List: React.FC = () => {
  const state = useAppSelector((state) => state);
  return (
    <ul className="h-[432px] w-full bg-gray-200 rounded-lg p-1 overflow-y-scroll flex flex-col gap-1">
      {state.map((todo) => (
        <ListItem {...todo} />
      ))}
    </ul>
  );
};

export default List;
