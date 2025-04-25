import Name from "./Name"
import { BandName as BN } from "../App"


type NamesListProps = {
    names: BN[];
};

export default function NamesList({names}: NamesListProps) {
    return(
        <>
        <ul>
           {names.map((name) => (
            <li key={name.id}>
                <Name id={name.id} adj={name.adj} noun={name.noun}>
                </Name>
            </li>
           ))}
        </ul>
        </>
    );
};
