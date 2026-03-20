import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>+{counter}</button>
    <br />
    <button onClick={removeValue}>-{counter}</button>
    </>
  )
}             

export default App;