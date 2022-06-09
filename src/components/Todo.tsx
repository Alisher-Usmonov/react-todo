import React from "react";
import Field from "./Field";
import List from "./List";

const Todo: React.FC = () => {
  return (
    <div className="w-[400px] h-[500px] bg-white rounded-lg shadow-lg p-2 flex flex-col gap-2">
     <Field />
     <List />
    </div>
  );
};

export default Todo;
