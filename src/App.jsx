import { useState } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App
