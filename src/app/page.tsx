"use client";

import TodoInfo from "@/components/TodoInfo/TodoInfo";
import { useState } from "react";

function page() {
  const [todoNumbers, setTodoNumbers] = useState<number>(0);
  const [doneNumbers, setDoneNumbers] = useState<number>(0);

  return (
    <div>
      <h1 className="text-[40px] text-center font-medium mt-[20px]">
        Todo Page
      </h1>

      <TodoInfo todoNumbers={todoNumbers} doneNumbers={doneNumbers} />
    </div>
  );
}

export default page;
