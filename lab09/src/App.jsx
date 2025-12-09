import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import adult from './assets/adult.png'
import boy from './assets/boy.png'
import Likebutton from './Likebutton'

function App() {
  // Estado para el contador
  //Hook useState
  const [age, setAge] = useState(0)
  const [isAdult, setIsAdult] = useState(false)
  useEffect(() => {
    setIsAdult(age >= 18)
  }, [age])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setAge((age) => age + 1)}>
          count is {age}
        </button>
        <Likebutton></Likebutton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className = "avatars">
      <img src={isAdult ? adult : boy} alt = "avatar"
      />  
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more

      </p>
    </>
  )
}

export default App
