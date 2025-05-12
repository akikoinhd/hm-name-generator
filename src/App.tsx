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
  const [count, setCount] = useState<number>(0);
  const [rGenre, setRGenre] = useState<string>("");
  const [names, setNames] = useState<BandName[]>([]);

  async function handleGenerate(userGenre: string) {
    if (userGenre === "none") return;

    try {
      setNames([]);
      setCount((count) => count + 1);
      setRGenre(() => genres[Math.floor(Math.random() * genres.length)]);

      const response: Response = await fetch(`api/${userGenre}`);
      const json: { adjectives: string; nouns: string } = await response.json();
      const adjData: string = json.adjectives;
      const nounData: string = json.nouns;
      
      for (let i = 0; i < 6; i += 1) {
        setNames(prevNames => {
          const newName: BandName = {
            id: Math.random(),
            adj: adjData[Math.floor(Math.random() * adjData.length)],
            noun: nounData[Math.floor(Math.random() * nounData.length)]
          };
          return [...prevNames, newName]
        });
      }; 
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
        {count >= 5 &&
          <div>
            {count.toString()} clicks?  Seriously?  You're trying too hard.  Go listen to some {rGenre} metal and try again later.
          </div>}
      </div>
      <NamesList names={names}/>
    </>
  )
};

export default App;
