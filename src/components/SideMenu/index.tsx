import { ReactNode, useEffect, useState } from "react"
import { Container } from "./styles"

const scrollThreshold = 300;

interface Props {
  children?: ReactNode
}

export default function SideMenu({ children }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];

  const className = classes.join(' ').trim();

  return(
    <Container className={className}>
      {children}
    </Container>
  )
}