import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ashmit",
    age: "20"
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <br />
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.squarespace-cdn.com/content/v1/58bfb8c059cc68cc36914ea9/1523253739970-MDX4J7NGB4PLQKRBI8EV/sarah-dayan.jpg" alt="" width="384" height="512" />
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    <Card username="Ashmit" btnText="Click Me"/>
    <Card username="Shukla" btnText="Visit Me"/>
    </>
  )
}

export default App
