import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import headerImg from './assets/header.png'

export type BandName = {
  title: string;
  id: number;
}

const genres: string[] = [
  "heavy",
  "black",
  "death",
  "doom",
  "stoner",
  "sludge",
  "gothic"
];

function App() {
  const [count, setCount] = useState(0);
  const [rGenre, setRGenre] = useState("");

  async function handleClick() {
    try {
      setCount((count) => count + 1);
      setRGenre(() => genres[Math.floor(Math.random() * genres.length)]);


      // fetch test
      const hellodata: Response = await fetch('/api/hello');
      const hello: string = await hellodata.text();
      console.log(hello);

      // fetch
      // will receive array of band names in json, just send them to the NamesList component
      const data: Response = await fetch('/api/generate');
      console.log(typeof data);
      const json = await data.json();
      console.log(typeof json);


    } catch (e) {
      console.error("An error occurred:", e);
    };

  };

  return (
    <>
      <Header image={{src: headerImg, alt: 'Metal Band Name Generator'}}>
      <h1>For uncreative metalheads</h1>
      </Header>
      {/* <GenreSelect onGenreSelect={handleClick} count={count} /> */}
      <div className="card">
          <button onClick={handleClick}>
          {count > 0 ? "TRY AGAIN" : "GENERATE"}
          </button>
      </div>
      <div>
        {count >= 2 &&
          <div>
            {count.toString()} clicks?  Seriously?  You're trying too hard.  Go listen to some {rGenre} metal and try again later.
          </div>}
      </div>
    </>
  )
};

export default App;
