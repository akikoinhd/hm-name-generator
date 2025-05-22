import Name from "./Name"
import { BandName as BN } from "../App"


type NamesListProps = {
    names: BN[];
};

export default function NamesList({names}: NamesListProps) {
    return(
        <div className="flex items-center justify-center">
            <ul className="font-[Metamorphous] text-neutral-300 text-lg">
            {names.map((name) => (
                <li key={name.id} className="flex flex-col items-center jsutify-center p-2">
                    <Name id={name.id} adj={name.adj} noun={name.noun}>
                    </Name>
                </li>
            ))}
            </ul>
        </div>
    );
};
