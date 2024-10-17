import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todoContext";
const NewTodo = () => {
    const todoContext = useContext(TodosContext);
    const todoRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: FormEvent) => {
        e.preventDefault(); 
        console.log(todoRef.current?.value);
        const text = todoRef.current?.value;
        if(text === null || text === undefined || text?.length === 0){
            throw new Error("text empty")
        }
        todoContext.addTodo(text)
        if(todoRef.current !== null){
            todoRef.current.value = ""
        }
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo