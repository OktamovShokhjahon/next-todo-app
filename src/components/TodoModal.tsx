import { TodoInterface } from "@/interfaces/todo.interface";
import { CrossIcon } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoModal({
  setIsOpen,
  setTodoItems,
  setTodoNumbers,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
  setTodoNumbers: React.Dispatch<React.SetStateAction<number>>;
  setDoneNumbers: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleCreate() {
    if (title === "" || description === "") {
      setError("Title and description are required");
      return;
    }

    const newTodo: TodoInterface = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };

    setTodoItems((prev) => [...prev, newTodo]);
    setTodoNumbers((prev) => prev + 1);
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <>
      <div className="max-w-[500px] mx-auto my-[20px] w-full  bg-white rounded-[10px] p-[20px] z-[2] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-medium">Create new todo</h2>
          <CrossIcon
            stroke="red"
            className="rotate-[90deg]"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="mt-[20px] flex flex-col gap-[10px]">
          <label className="flex flex-col gap-[5px]">
            <span>Enter Title</span>
            <input
              type="text"
              placeholder="Title"
              className="border-[1px] border-[#ccc] rounded-[5px] outline-none px-[15px] py-[5px]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-[5px]">
            <span>Enter Description</span>
            <input
              type="text"
              placeholder="Description"
              className="border-[1px] border-[#ccc] rounded-[5px] outline-none px-[15px] py-[5px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button onClick={handleCreate}>Create</button>
        </div>
        {error && error}
      </div>

      <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-[1]"></div>
    </>
  );
}

export default TodoModal;
