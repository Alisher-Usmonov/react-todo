import React, { useReducer, useRef } from "react";

type Action = 
    | { type: "add", text: string }
    | { type: "remove", index: number };
interface Todo {
    text: string;
    completed: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, completed: false }];
        case "remove":
            return state.filter((todo, idx) => action.index !== idx);
        default:
            return state;
    }
} 

const WithReducer: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
        let todo = inputRef.current?.value;
        dispatch({ type: "add", text: `${todo}` })
    } 
    return (
        <div>
            {JSON.stringify(todos)}
            <input type="text" ref={inputRef} />
            <button
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    )
}

export default WithReducer;