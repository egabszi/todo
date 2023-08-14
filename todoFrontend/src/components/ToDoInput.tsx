const TodoInput = ({ task, handleInputChange, handleAdd }: {task: string, handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleAdd: () => void}) => {
    return (
        <div className='flex m-3 h-[3rem] w-[70%] justify-between rounded-xl max-sm:h-[2rem] max-sm:w-[90%]'>
            <input
                type="text"
                value={task}
                placeholder='add task'
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                }}
                className='font-dosis outline-none text-[2rem] w-[90%] text-center border-[1px] text-[#354649] border-[#354649] border-r-0 rounded-l-xl bg-[#E0E7E9] placeholder:text-[#354649] placeholder:opacity-50'
            />
            <button
                onClick={handleAdd}
                className='font-dosis w-[10%] h-[3rem] bg-[#6C7A89] rounded-r-xl text-center border-[1px] border-[#354649] max-sm:h-[2rem] max-sm:text-[1.2rem] text-[#354649] opacity-80'
            >
                <img src="./src/assets/plus-line-icon.png" alt="plus" className="w-[1.2rem] h-[1.2rem] justify-center align-middle flex m-auto"/>
            </button>
        </div>
    );
};

export default TodoInput;