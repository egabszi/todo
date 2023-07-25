const TodoInput = ({ task, handleInputChange, handleAdd }: {task: string, handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleAdd: () => void}) => {
    return (
        <div className='flex m-3 h-[2.5rem] w-[70%] justify-between rounded-xl max-sm:h-[2rem] max-sm:w-[90%]'>
            <input
                type="text"
                value={task}
                placeholder='add task'
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                }}
                className='font-fasthand outline-none text-[1.5rem] w-[90%] text-center border-[1px] text-[#FFA000] border-[#FFA000] border-r-0 rounded-l-xl bg-[#FFFEED] placeholder:text-[#FFA000] placeholder:opacity-60'
            />
            <button
                onClick={handleAdd}
                className='font-fasthand text-[1.8rem] w-[10%] h-[2.5rem] bg-[#FED795] rounded-r-xl text-center border-[1px] border-[#FFA000] max-sm:h-[2rem] max-sm:text-[1.2rem] text-[#FFA000]'
            >
                +
            </button>
        </div>
    );
};

export default TodoInput;