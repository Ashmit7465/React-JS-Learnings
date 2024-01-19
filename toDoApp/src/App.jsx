import React, { useState, useEffect } from "react";
// import './contexts'
import "./App.css";
import { ToDoContextProvider } from "./contexts/ToDoContext";
import { ToDoForm, ToDoItem } from "./components";

function App() {
  const [todos, setTodDos] = useState([]);

  const addToDo = (todo) => {
    setTodDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodDos((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo))
    );
  };

  const deleteTodo = (id) => {
    setTodDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    console.log(id);
    setTodDos((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodDos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContextProvider
      value={{ todos, addToDo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
