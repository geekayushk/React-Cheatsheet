import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState()==> use to propagate the changes in UI/DOM
  const [counter, setCounter] = useState(5)

  // let counter=5

  const addValue = () => {

    // counter=counter+1
    if (counter < 20)
      setCounter(counter + 1)
    else
      alert("limit reached")
  }

  const removeValue = () => {
    if (counter > 0)
      setCounter(counter - 1)
    else
      alert("limit reached")
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}>Add value</button>
      <br />
      <button
        onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
