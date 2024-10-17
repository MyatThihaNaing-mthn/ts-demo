import { useContext } from "react"
import { TodoItem } from "./TodoItem"
import classes from "./Todos.module.css"
import { TodosContext } from "../store/todoContext"

const Todos = () => {

  const todoContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoContext.items.map(item => (
        <TodoItem key={item.id} todo={item} ></TodoItem>
      ))}
    </ul>
  )
}

export default Todos
