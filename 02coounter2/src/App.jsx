import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button
          className="counter"
          onClick={() => {
            if (count < 20) {
              setCount((count) => count + 1);
            }
          }}
        >
          Count is {count}
        </button>
        <button
          className="counter"
          onClick={() => {
            if (count > 0) {
              setCount((count) => count - 1);
            }
          }}>
            Count is {count}
        </button>
    </>
  )
}

export default App
