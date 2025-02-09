function TodoInfo({
  todoNumbers,
  doneNumbers,
}: {
  todoNumbers: number;
  doneNumbers: number;
}) {
  return (
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
          <button className="py-[10px] px-[35px] rounded-[8px] bg-green-700 text-white border-[2px] border-green-700 transition hover:bg-transparent hover:text-green-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInfo;
