import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import headerImg from './assets/header.png'

export type BandName = {
  title: string;
  id: number;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header image={{src: headerImg, alt: 'Heavy Metal Band Name Generator'}}>
      <h1>Use this if you're a poser</h1>
      </Header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App;
