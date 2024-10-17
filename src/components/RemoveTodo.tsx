import { FC, useContext } from 'react'
import { TodosContext } from '../store/todoContext'


export const RemoveTodo :FC<{id: string}> = (props) => {
  const todoContext = useContext(TodosContext)

  return (
    <button onClick={()=>todoContext.removeTodo(props.id)}>Remove</button>
   )
 }
