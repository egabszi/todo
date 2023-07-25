import { useEffect, useState } from "react";
import TodoInput from "./ToDoInput";
import TodoItem from "./ToDoItem";

export interface TodoItem {
  id: number
  title: string
  isCompleted: boolean
}

const Container = () => {
  const [todoList, setTodoList] = useState([] as TodoItem[]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async(response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const todoResponse = await response.json()
      setTodoList(todoResponse as TodoItem[])
    })
  }, [])

  const handleCheckbox = (index: number) => {
    const newCheckedItems = [...todoList];
    newCheckedItems[index].isCompleted = !newCheckedItems[index].isCompleted;
    fetch(`http://localhost:3000/todos/${newCheckedItems[index].id}`, {
      method: "POST",
      body: JSON.stringify(
        newCheckedItems[index]
      )
    }).then(async(response) => {
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      newCheckedItems[index] = await response.json()
      setTodoList(newCheckedItems);
    })
  };

  const handleDelete = (index: number) => {
    const newTodoList = [...todoList];
    //const newCheckedItems = [...isChecked];

    newTodoList.splice(index, 1);
    //newCheckedItems.splice(index, 1);

    //setTodoList(newTodoList);
    //setIsChecked(newCheckedItems);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  
  const handleAdd = () => {
    if (task) {
      const newItem = {
        id: todoList.length + 1 ,
        title: task,
        isCompleted: false
      }
      //const newTaskList = todoList ? [...todoList, task] : [task];
      //setTodoList(newTaskList);
      fetch(`http://localhost:3000/todos/${newItem.id}`, {
        method: "POST",
        body: JSON.stringify(
          newItem
        )
      }).then(async(response) => {
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        const updatedTodoList = await response.json();
        todoList.push(updatedTodoList)
        setTask("");
        console.log(todoList)
      })
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div className='bg-[#FFEBC9] min-h-[70vh] flex flex-col w-[70%] items-center m-auto rounded-xl border-[#FED795] border-2 max-sm:w-[90%]'>
      <h1 className='text-[3rem] font-fasthand text-[#FFA000] max-sm:text-[2rem]'>Things To Do</h1>
      <TodoInput
        task={task}
        handleInputChange={handleInputChange}
        handleAdd={handleAdd}
      />
      <div className='flex w-[70%] max-sm:w-[90%]'>
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
  );
};

export default Container;