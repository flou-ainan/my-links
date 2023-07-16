import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>This page is going to have My links</h1>
     <br/><br/>
     <footer>By: <a href="https://github.com/flou-ainan">Flou Ainan</a></footer>
    </>
  )
}

export default App
