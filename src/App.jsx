import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [joke, setjoke] = useState("")

  const fetchjokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any").then((response) => {
      return response.json()
    })
      .then((data) => {
        if (data.type === "single") {
          return (setCount(data.joke), setjoke(""))


        }
        else {
          return setCount(data.delivery), setjoke(data.setup)
        }
        console.log(data)
      })

  }

  useEffect(() => {
    fetchjokes()
  }, [])

  return (
    <div className='container'>
      <h1>"Tell Me a Joke"</h1>
      <p>{count}</p>
      <p>{joke}</p>
      <button onClick={fetchjokes}>change another jokes</button>
    </div>
  )

}

export default App
