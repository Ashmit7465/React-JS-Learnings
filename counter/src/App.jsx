import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countval, setCounter] = useState(15)
  //let countval = 15;

  const addValue = () => {
    if(countval + 1 > 20)
    {
      setCounter(15);
      console.log("Reset to default 15", 15);
    }
    else
    {
      setCounter(countval + 1) 
      console.log("Click add button", countval + 1); 
    }
    // setCounter(countval + 1)
    // console.log("Clicked add button", countval + 1);
  }

  const decreaseValue = () => {
    if(countval - 1 < 0)
    {
      setCounter(15);
      console.log("Reset to default 15", 15);
    }
    else
    {
      setCounter(countval - 1); 
      console.log("Click decrease button", countval - 1);
    }
    // setCounter(countval - 1);
    // console.log("Click decrease button", countval - 1);
  } 
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {countval}</h2>

      <button onClick={addValue}>Increment The Value By 1</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrement The Value By 1</button>
    </>
  )
}

export default App
