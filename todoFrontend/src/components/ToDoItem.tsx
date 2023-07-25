const TodoItem = ({ item, isChecked, handleDelete, handleCheckbox }: { item: string, isChecked: boolean, handleDelete: () => void, handleCheckbox: () => void }) => {
    return (
      <li className="flex">
        <button
          onClick={handleDelete}
          className="mr-[1rem] text-[1rem] text-red-600 font-fasthand"
        >
          X
        </button>
        <label className="h-[2.5rem] flex justify-center align-middle max-sm:h-[100%]">
          <input
            className="cursor-pointer relative mr-[1rem] w-[20px] h-[20px] m-auto appearance-none bg-[#FFFEED] border-[#FFA000] border-2 rounded-full checked:opacity-60"
            type='checkbox'
            onClick={handleCheckbox}
          />
          <h1 className="font-fasthand capitalize flex flex-wrap w-[100%] cursor-pointer text-[1.6rem] text-[#FFA000] items-center">
            {isChecked ? (
              <del className="opacity-60">{item}</del>
            ) : (
              item
            )}
          </h1>
        </label>
      </li>
    );
  };

  export default TodoItem