import { legacy_createStore as createStore } from "redux";
import TodoReducer from "../reducers/reducer";

const store = createStore(TodoReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
