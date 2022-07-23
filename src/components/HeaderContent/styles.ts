import styled from "styled-components";

export const Container = styled.div`
  --color: rgba(255, 255, 255, 0.8);
  color: var(--color);
`;

export const Title = styled.h1`
  margin-bottom: 3rem;
  &::after {
    content: "";
    display: block;
    background: #323232;
    height: 0.5rem;
    width: 6rem;
    border-radius: 0.2rem;
  }
`;
