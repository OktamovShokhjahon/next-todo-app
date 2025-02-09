import React, { useState } from "react";
import TodoModal from "../TodoModal";
import { TodoInterface } from "@/interfaces/todo.interface";

function TodoInfo({
  todoNumbers,
  doneNumbers,
  setTodoNumbers,
  setTodoItems,
}: {
  todoNumbers: number;
  doneNumbers: number;
  setTodoNumbers: React.Dispatch<React.SetStateAction<number>>;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <div className="w-full mt-[20px] shadow-2xl p-[20px] rounded-[10px] border-[1px] border-[#ccc] flex justify-between items-center gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[20px] font-medium">
              Overall todo numbers: {todoNumbers}
            </h3>
            <h3 className="text-[20px] font-medium">
              Done todo numbers: {doneNumbers}
            </h3>
          </div>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="py-[10px] px-[35px] rounded-[8px] bg-green-700 text-white border-[2px] border-green-700 transition hover:bg-transparent hover:text-green-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <TodoModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setTodoItems={setTodoItems}
          setTodoNumbers={setTodoNumbers}
          setDoneNumbers={() => {}}
        />
      )}
    </>
  );
}

export default TodoInfo;
