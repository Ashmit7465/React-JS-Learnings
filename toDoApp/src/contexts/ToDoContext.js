import { useContext, createContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      toDo: "To Do task message",
      completed: false,
    },
  ],
  addToDo: (toDo) => {},
  updateTodo: (id, toDo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;
