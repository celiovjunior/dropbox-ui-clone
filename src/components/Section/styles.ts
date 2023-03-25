import styled from "styled-components";

export const Container = styled.div`
  --padding-top: 6.25rem;
  --padding-bottom: 7.5rem;
  --heading-font-size: 2rem;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 8.125rem;
    --heading-font-size: 51px;

    @media(min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background-color: var(--bg-color);
`

export const Content = styled.div`
  max-width: 1440px;
  z-index: 2;
  position: relative;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--contnent-width);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--logo-color);
    max-width: var(--contnent-width)
  }

  padding: var(--padding-top) 2rem var(--padding-bottom);

`