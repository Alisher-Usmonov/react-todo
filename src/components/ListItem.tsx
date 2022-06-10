import React from "react";
import { useAppDispatch } from "../hooks";
import { XIcon } from "@heroicons/react/solid";

interface IProps {
  id: number;
  text: string;
  completed: boolean;
}

const ListItem: React.FC<IProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };
  const handleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    let checked = event.target.checked;
    dispatch({
      type: "set_completed",
      payload: {
        id,
        completed: checked,
      },
    });
  };
  return (
    <li className="flex !min-h-[60px] !w-full items-center justify-between rounded-md bg-slate-300 p-1">
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          onChange={handleComplete}
          className="form-checkbox h-5 w-5 rounded-[4px] border border-green-400 text-green-400"
        />
        <h3
          className={`text-lg font-normal text-gray-700 ${
            completed ? "line-through" : ""
          }`}
        >
          {text}
        </h3>
      </div>
      <button onClick={handleDelete}>
        <XIcon className="hover h-6 w-6 text-gray-600 hover:text-red-500" />
      </button>
    </li>
  );
};

export default ListItem;
