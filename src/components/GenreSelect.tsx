import { FormEvent, useRef } from "react";


type GenreSelectProps = {
    onGenreSubmit: (userGenre: string) => void;
};

export default function GenreSelect({ onGenreSubmit }: GenreSelectProps) {
    const genre = useRef<HTMLSelectElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selectedGenre = genre.current!.value;
        console.log(selectedGenre);
        event.currentTarget.reset();
        onGenreSubmit(selectedGenre);
    }

    return(
        <form onSubmit={handleSubmit}>
            <select ref={genre}>
                <option value="none">Select a subgenre...</option>
                <option value="death">Death Metal</option>
                <option value="black">Black Metal</option>
                <option value="doom">Doom Metal</option>
            </select>
            <div>
                <button>GENERATE</button>
            </div>
        </form>
    )
};