import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>
        Custom React | Understanding of Working of React
      </h1>
    </>
  )
}

const reactElement = {
  type: 'a',
  props: {
        href: 'https://google.com',
        target: '_blank'
  },
  children: 'Click me to visit Google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
