import React, { useEffect, useState } from "react";
import TodoItem from "../todo-item/todo-item";
import TodoForm from "../todo-form/todo-form";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos") as string) || [];
  });

  const [searchValue, setSearchValue] = useState<string>("");

  React.useEffect(() => {
    // get todos list from localStorage if exist to persist todo items across page reloads
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // set item in the local storage with key name called todos
    localStorage.setItem("todos", JSON.stringify(todos));
    // if the local storgae is cleared in the browser then set setTodos to empty array to empty todo list
    window.addEventListener("storage", storageEventHandler);
  }, [todos]);

  const storageEventHandler = (e) => {
    // if the key in the local storgae with the name todos does not exist set todos list with empty array
    if (!e.key) {
      setTodos([]);
    }
  };

  const handleComplete = (id) => {
    // filter todos list with the matching todoId to delete it 
    setTodos(
      todos.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
  };

  const handleRemove = (todoId) => {
    // filter todos list with the matching todoId to delete it 
    setTodos(todos.filter((task) => task.id !== todoId));
  };

  const handleAdd = (todo) => {
    // add the new todo item to todos list 
    todo.id = new Date().getTime();
    setTodos([...todos, todo]);
  };

  const handleEdit = (tododId) => {
    // edit the existing todo item with a new name 
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id == tododId ? { ...todo, task: editedTodo } : todo
        )
      );
    }
  };

  const searchTodo = (event) => {
    const seatch = event.target.value.toLowerCase();
    setSearchValue(seatch);
  };

  return (
      <div className="bg-blue-200 rounded-xl w-1/2 h-[600px] flex justify-center overflow-scroll dark:bg-[#7E8EF1]">
        <div className="flex flex-col flex-1 p-5 items-top gap-5">
          {/* search todo by name will filter non-completed and completed todos*/}
          <p className="text-red-500">search todo by name will filter non-completed and completed todos</p>
          <div className="flex items-center">
            <input
              className="flex-1 border-2 rounded-l-md border-blue-500 p-3 "
              type="text"
              placeholder="search todo by name"
              onChange={(e) => searchTodo(e)}
            />
            <button
              type="button"
              className="dark:bg-[#615EFC] dark:border-[#615EFC] border-2 rounded-r-md border-blue-500 text-white bg-blue-500 w-11 h-full text-3xl flex items-center justify-center"
            >
              <span className="font-bold hover:scale-125 transition">
                &#x2715;
              </span>
            </button>
          </div>
          {/* add todo */}
          <TodoForm onAdd={handleAdd} />
          {/* non-completed todo items */}
          <h2 className="font-bold">non-completed todo</h2>
          {/* filter  the todos list with the matching search value and non-completed todo */}
          {todos
            .filter((todo) => !todo.done && todo.task.includes(searchValue))
            .map((todo, index) => (
              <TodoItem
                key={`task-${index}`}
                todo={todo}
                onComplete={handleComplete}
                onRemove={handleRemove}
                onEdit={handleEdit}
              />
            ))}

          {/* line speraot */}
          <div className="w-full border border-blue-300"></div>

          {/* completed  todos items */}
          <h2 className="font-bold">completed todo</h2>
          {/* filter  the todos list with the matching search value and completed todo */}
          {todos
            .filter((todo) => todo.done && todo.task.includes(searchValue))
            .map((todo, index) => (
              <TodoItem key={`task-${index}`} todo={todo} done />
            ))}
        </div>
      </div>
  );
}

export default TodoList;
