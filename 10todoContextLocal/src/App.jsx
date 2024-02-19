import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    // setTodos(todo)
    //ye krne se ye naya todo todos me jaayega mtlb ki phle wale saare todos delete hojayenge, bas ye naya todo show hoga isliye, hum niche wale line me previous todo ko lekar usko spread kr de rhe using '...' spread operator and uske baad hum naya todo set kr skte h. &
    //hum [{},...prev] or [...prev,{}] dono likh skte h

    //[{object isliye create kr rhe h qki humne context me object define kiya tha to hume to pura todo banana h}]

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  //prev means previous state bol lo ya previous value & todo is current state bol lo ya current todo bol lo

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //local storage of data is done by using useEffect
  //localstorage sends data in string format so we used JSON.parse to convert it into string
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updatedTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
