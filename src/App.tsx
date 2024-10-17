import './App.css'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import { TodoContextProvider } from './store/todoContext'


function App() {

  return (
    <TodoContextProvider>
      <Todos/>
      <NewTodo/>
    </TodoContextProvider>
  )
}

export default App
