import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-2xl">
          <button onClick={() => setColor("blue")} className="bg-blue-500 text-white p-2 rounded-lg">Blue</button>
          <button onClick={() => setColor("green")} className="bg-green-500 text-white p-2 rounded-lg">Green</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-white p-2 rounded-lg">Yellow</button>
          <button onClick={() => setColor("orange")} className="bg-orange-500 text-white p-2 rounded-lg">Orange</button>
          <button onClick={() => setColor("purple")} className="bg-purple-500 text-white p-2 rounded-lg">Purple</button>
          <button onClick={() => setColor("pink")} className="bg-pink-500 text-white p-2 rounded-lg">Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App