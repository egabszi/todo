import { useEffect, useState } from "react";
import TodoInput from "./ToDoInput";
import TodoItem from "./ToDoItem";
import Footer from "./Footer";

export interface TodoItem {
  id: number
  title: string
  isCompleted: boolean
}

const Container = () => {
  const [todoList, setTodoList] = useState([] as TodoItem[]);
  const [task, setTask] = useState("");

  useEffect(() =>
    handleChanges(),
     [])
  
  const handleChanges = () => {
    fetch("http://localhost:3000/todos")
    .then(async(response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const todoResponse = await response.json()
      setTodoList(todoResponse as TodoItem[])
    })
  }

  const handleCheckbox = (index: number) => {
    const newCheckedItems = [...todoList];
    newCheckedItems[index].isCompleted = !newCheckedItems[index].isCompleted;
    fetch(`http://localhost:3000/todos/${newCheckedItems[index].id}`, {
      method: "POST",
      body: JSON.stringify(
        newCheckedItems[index]
      )
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      newCheckedItems[index] = await response.json()
      setTodoList(newCheckedItems);
    })
  };

  const handleDelete = (index: number) => {
    const newTodoList = [...todoList];
    fetch(`http://localhost:3000/todos/${newTodoList[index].id}`, {
      method: "DELETE"
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    })
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAdd = () => {
    if (task) {
      const newItem: TodoItem = {
        id: null as unknown as number,
        title: task,
        isCompleted: false
      }
      fetch(`http://localhost:3000/todos`, {
        method: "PUT",
        body: JSON.stringify(newItem)
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const updatedTodoList = await response.json();
        setTodoList(updatedTodoList);
        setTask("");
      })
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div>
      <div className='bg-[#A3C6C4] h-[80vh] flex flex-col w-[70%] items-center m-auto rounded-xl border-[#354649] border-[3px] max-sm:w-[90%]'>
        <h1 className='text-[4rem] font-dosis text-[#354649] max-sm:text-[2rem]'>Things to do</h1>
        <TodoInput
          task={task}
          handleInputChange={handleInputChange}
          handleAdd={handleAdd}
        />
        <div className='flex w-[70%] max-sm:w-[90%] overflow-y-scroll mb-[1rem]'>
          <ul className='w-[100%]' id="list">
            {todoList.map((todoItem, index) => (
              <TodoItem
                key={index}
                item={todoItem.title}
                isChecked={todoItem.isCompleted}
                handleDelete={() => handleDelete(index)}
                handleCheckbox={() => handleCheckbox(index)}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;