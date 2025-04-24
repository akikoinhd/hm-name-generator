import { PropsWithChildren } from "react";

type NameProps = PropsWithChildren<{
    id: number;
    title: string;
}>;

export default function Name({title, children}: NameProps){
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </article>
};
