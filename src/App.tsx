import React from "react";
import Todo from "./components/Todo";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-indigo-600 to-violet-500 backdrop-blur-xl flex items-center justify-center font-[cursive]">
      <Todo />
    </div>
  );
};

export default App;
