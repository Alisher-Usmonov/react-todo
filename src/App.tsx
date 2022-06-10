import React from "react";
import Todo from "./components/Todo";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-tr from-indigo-600 to-violet-500 backdrop-blur-xl font-poppins">
      <Todo />
    </div>
  );
};

export default App;
