interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type State = Todo[];
const initialState: State = [];

type Action =
  | {
      type: "add";
      payload: string;
    }
  | {
      type: "delete";
      payload: number;
    }
  | {
        type: "set_completed",
        payload: {
            id: number,
            completed: boolean
        }
    } 


const TodoReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "add":
            return [...state, {
                id: state.length+1,
                text: action.payload,
                completed: false
            }]
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "set_completed":
            return state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        default:
            return state;
    }
};

export default TodoReducer;