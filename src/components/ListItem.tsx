import React from "react";
import { useAppDispatch } from "../hooks";

interface IProps {
    id: number;
    text: string;
    completed: boolean;
}

const ListItem: React.FC<IProps> = ({ id, text }) => {
    const dispatch = useAppDispatch();
    return (
        <li className="w-full !h-[60px] rounded-md bg-slate-300 p-1">
            <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
        </li>
    )
}

export default ListItem;