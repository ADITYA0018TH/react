import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Main Value:</h1>
    <button className="counter" onClick={() => setCount(count + 1)}>
      Click to increment
    </button>
    <p>Count: {count}</p>
    </>
  )
}

export default App
