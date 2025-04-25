import { PropsWithChildren } from "react";

type NameProps = PropsWithChildren<{
    id: number;
    adj: string;
    noun: string;
}>;

export default function Name({adj, noun, children}: NameProps){

    return <article>
        <div>
            <h2>{`${adj} ${noun}`}</h2>
            <p>{children}</p>
        </div>
    </article>
};
