import { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode
  image: {
    src: string
    alt: string
  }
}

export default function Header(props: HeaderProps) {
  return <header>

    <div>
      <img src={props.image.src} alt={props.image.alt} />
      {props.children}
    </div>
  </header>
}