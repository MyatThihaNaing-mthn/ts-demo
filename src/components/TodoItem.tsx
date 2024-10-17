import { FC } from 'react'
import { RemoveTodo } from './RemoveTodo'
import Todo from '../models/todo'



export const TodoItem :FC<{todo: Todo}> = (props) => {

  return (
    <li>
        {props.todo.text}
        <RemoveTodo id={props.todo.id}/>
    </li>
   )
 }
