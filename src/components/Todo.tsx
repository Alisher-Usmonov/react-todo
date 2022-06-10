import React from "react";
import Field from "./Field";
import List from "./List";

const Todo: React.FC = () => {
  return (
    <div className="flex h-[500px] w-[400px] flex-col gap-2 rounded-lg bg-white p-2 shadow-lg">
      <Field />
      <List />
    </div>
  );
};

export default Todo;
