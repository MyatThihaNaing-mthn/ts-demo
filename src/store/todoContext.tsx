import { createContext, FC, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const contextValue = {
    items: todos,
    addTodo: addNewTodo,
    removeTodo: removeTodo
  }
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export {
    TodoContextProvider,
    TodosContext
}