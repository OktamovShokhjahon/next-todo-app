import { TodoInterface } from "@/interfaces/todo.interface";
import { CircleCheck, Trash2 } from "lucide-react";

function TodoListItem({ item }: { item: TodoInterface }) {
  return (
    <div
      key={item.id}
      className="w-full p-[20px] shadow-lg rounded-[10px] border-[1px] border-[#ccc] flex justify-between items-center gap-[20px]"
    >
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[25px] max-w-[200px]">{item.title}</h1>
        <p className="text-[15px] max-w-[500px]">{item.description}</p>
      </div>
      <div className="flex gap-[15px]">
        <Trash2 stroke="red" cursor={"pointer"} />

        <CircleCheck stroke="green" cursor={"pointer"} />
      </div>
    </div>
  );
}

export default TodoListItem;
