import { FormEvent, useRef } from "react";


type GenreSelectProps = {
    onGenreSubmit: (userGenre: string) => void;
};

export default function GenreSelect({ onGenreSubmit }: GenreSelectProps) {
    const genre = useRef<HTMLSelectElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selectedGenre = genre.current!.value;
        onGenreSubmit(selectedGenre);
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center text-neutral-300 p-4 mt-4 font-[Metamorphous] text-sm">
            <select ref={genre} className="p-3 pb-2 pt-2 border border-neutral-500 bg-neutral-800 rounded-md">
                <option value="none">Select a subgenre...</option>
                <option value="death">Death Metal</option>
                <option value="black">Black Metal</option>
                <option value="doom">Doom Metal</option>
            </select>
            <div className="mt-5">
                <button className="p-2 text-xl border-2 border-neutral-700 rounded-full hover:border-red-700 hover:text-red-700 active:bg-red-700">GENERATE</button>
            </div>
        </form>
    )
};