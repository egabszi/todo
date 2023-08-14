const TodoItem = ({ item, isChecked, handleDelete, handleCheckbox }: { item: string, isChecked: boolean, handleDelete: () => void, handleCheckbox: () => void }) => {
  return (
    <li className="flex min-h-[3rem]">
      <button
        onClick={handleDelete}
        className="mr-[1rem] text-[1rem] text-red-600 font-dosis w-[5%]"
      >
        <img src="./src/assets/red-trash-can-icon.png" alt="del" className="w-[1.5rem] h-[2rem]" />
      </button>
      <label className="flex-1 justify-center align-middle max-sm:h-[100%] ml-4">
        <input
          className="hidden"
          type='checkbox'
          onClick={handleCheckbox}
        />
        {isChecked ? (
          <div className="w-[90%] flex align-middle">
          <h1 className="font-dosis lowercase flex flex-wrap cursor-pointer text-[2rem] text-[#354649] items-center">
            <del className="opacity-60">{item}</del>
          </h1>
            <img src="./src/assets/tick-mark-icon.png" alt="tick" className="h-[1.5rem] align-middle justify-center ml-[1rem] m-auto"/>
          </div>
        ) : (
          <h1 className="font-dosis lowercase flex flex-wrap w-[90%] cursor-pointer text-[2rem] text-[#354649] items-center">
            {item}
          </h1>
        )}
      </label>
    </li >
  );
};

export default TodoItem