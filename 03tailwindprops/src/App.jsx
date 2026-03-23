import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='w-160 bg-cyan-400 text-black p-4 rounded-lg m-8'>Tailwind Test</h1>
      <Card username="Aditya" age={22} />
      <Card username="John"/>
    </>
  )
}

export default App;
