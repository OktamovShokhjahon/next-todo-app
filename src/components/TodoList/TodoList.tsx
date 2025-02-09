import { TodoInterface } from "@/interfaces/todo.interface";
import TodoListItem from "./TodoListItem";

function TodoList({ items }: { items: TodoInterface[] }) {
  return (
    <div className="container">
      <div className="mt-[20px] w-full flex flex-col gap-[20px]">
        {items?.map((item: TodoInterface) => {
          return <TodoListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
