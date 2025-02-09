function TodoInfo({
  todoNumbers,
  doneNumbers,
}: {
  todoNumbers: number;
  doneNumbers: number;
}) {
  return (
    <div className="container">
      <div className="w-full mt-[20px] shadow-2xl p-[20px] rounded-[10px] border-[1px] border-[#ccc]">
        <h3 className="text-[20px] font-medium">
          Overall todo numbers: {todoNumbers}
        </h3>
        <h3 className="text-[20px] font-medium">
          Done todo numbers: {doneNumbers}
        </h3>
      </div>
    </div>
  );
}

export default TodoInfo;
