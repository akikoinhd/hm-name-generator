import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import headerImg from './assets/header.png'
import GenreSelect from './components/GenreSelect';
import NamesList from './components/NamesList';

const genres: string[] = [
  "heavy",
  "black",
  "death",
  "doom",
  "stoner",
  "sludge",
  "gothic"
];

export type BandName = {
  adj: string;
  noun: string;
  id: number;
}

function App() {
  const [count, setCount] = useState(0);
  const [rGenre, setRGenre] = useState("");
  const [names, setNames] = useState<BandName[]>([]);

  async function handleGenerate(userGenre: string) {
    if (userGenre === "none") return;

    try {
      await setCount((count) => count + 1);
      await setRGenre(() => genres[Math.floor(Math.random() * genres.length)]);

      const response: Response = await fetch('api/generate');
      const json = await response.json();
      const adjData = await JSON.parse(json.adjectives);
      const genAdjs = adjData[userGenre];
      const nounData = await JSON.parse(json.nouns);
      const genNouns = nounData[userGenre];
      
      for (let i = 0; i < 10; i += 1) {
        setNames(prevNames => {
          const newName: BandName = {
            id: Math.random(),
            adj: genAdjs[Math.floor(Math.random() * genAdjs.length)],
            noun: genNouns[Math.floor(Math.random() * genNouns.length)]
          };
          return [...prevNames, newName]
        });
      };

      // let randAdj: string = genAdjs1[Math.floor(Math.random() * genAdjs1.length)];
      // let randNoun: string = genNouns1[Math.floor(Math.random() * genNouns1.length)];
      
      // for (let i = 0; i < 10; i += 1) {
      //   randAdj = genAdjs1[Math.floor(Math.random() * genAdjs1.length)];
      //   randNoun = genNouns1[Math.floor(Math.random() * genNouns1.length)];
      //   setGenAdjs([...genAdjs, randAdj]);
      //   setGenNouns([...genNouns, randNoun]);
      //   console.log(genAdjs);
      //   console.log(genNouns);
      // };
    

    } catch (e) {
      console.error("An error occurred:", e);
    };

  };

  return (
    <>
      <Header image={{src: headerImg, alt: 'Metal Band Name Generator'}}>
        <h1>For uncreative metalheads</h1>
      </Header>
      <GenreSelect onGenreSubmit={handleGenerate}/>
      <div>
        {count >= 2 &&
          <div>
            {count.toString()} clicks?  Seriously?  You're trying too hard.  Go listen to some {rGenre} metal and try again later.
          </div>}
      </div>
      <NamesList names={names}/>
    </>
  )
};

export default App;
