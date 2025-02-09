"use client";

import TodoInfo from "@/components/TodoInfo/TodoInfo";
import TodoList from "@/components/TodoList/TodoList";
import { TodoInterface } from "@/interfaces/todo.interface";
import { useState } from "react";

function page() {
  const [todoNumbers, setTodoNumbers] = useState<number>(0);
  const [doneNumbers, setDoneNumbers] = useState<number>(0);
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  return (
    <div>
      <h1 className="text-[40px] text-center font-medium mt-[20px]">
        Todo Page
      </h1>

      <TodoInfo
        todoNumbers={todoNumbers}
        doneNumbers={doneNumbers}
        setTodoNumbers={setTodoNumbers}
        setTodoItems={setTodos}
      />
      <TodoList items={todos} />
    </div>
  );
}

export default page;
