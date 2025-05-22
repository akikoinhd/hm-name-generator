import { PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren<{image: {src: string, alt: string}}>

export default function Header({image, children} : HeaderProps) {
    return(
        <header className="flex flex-col items-center justify-center">
            <img src={image.src} alt={image.alt}/>
            {children}
        </header>
    )
};
