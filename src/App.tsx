import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import headerImg from './assets/MetalizerHeader.png';
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
};


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
      const adjData: string[] = json.adjectives.toString().split(',').sort(() => Math.random() - 0.5);
      const nounData: string[] = json.nouns.toString().split(',').sort(() => Math.random() - 0.5);
      
      for (let i = 0; i < 6; i += 1) {
        setNames(prevNames => {
          const newName: BandName = {
            id: Math.random(),
            adj: adjData[i],
            noun: nounData[i]
          };
          return [...prevNames, newName]
        });
      }; 
    } catch (e) {
      console.error("An error occurred:", e);
    };

  };

  return (
    <div className="bg-neutral-950 w-screen h-screen">
      <Header image={{src: headerImg, alt: 'Metal Band Name Generator'}}>
        <h1 className="text-neutral-500 text-xs">Created by @akikoinhd</h1>
      </Header>
      <GenreSelect onGenreSubmit={handleGenerate}/>
      <div className="flex items-center justify-center p-4">
        {count >= 5 &&
          <div className="text-red-700 text-md">
            {count.toString()} clicks?  Seriously?  You're trying too hard.  Go listen to some {rGenre} metal and try again later.
          </div>}
      </div>
      <NamesList names={names}/>
    </div>
  )
};

export default App;
