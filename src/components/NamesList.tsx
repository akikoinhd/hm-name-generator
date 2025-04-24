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
                <Name id={name.id} title={name.title}>
                    <p>children</p>
                </Name>
            </li>
           ))}
        </ul>
        </>
    );
};
