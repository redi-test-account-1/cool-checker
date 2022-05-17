import logo from './logo.svg'
import { useState } from 'react'
import './App.css'

function App() {
  const [isCool, setIsCool] = useState(false)
  const COOL_NAMES = ['james', 'katie']

  const changeHandler = e => {
    const name = e.target.value

    setIsCool(COOL_NAMES.includes(name))
  }

  return (
    <div className="App">
      <input onChange={changeHandler} />
      <h1>Are they cool? {isCool ? 'yes' : 'no'}</h1>
    </div>
  )
}

export default App
