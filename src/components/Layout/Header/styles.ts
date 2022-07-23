import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: #323232;
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #474d4e;
`;

export const Content = styled.div`
  --color: rgba(255, 255, 255, 0.8);
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    color: var(--color);
    text-decoration: none;
    display: flex;
    gap: 10px;
    font-size: 1.08rem;
    opacity: 0.7;
    transition: all 0.5s;
  }

  .active {
    opacity: 1;
    font-weight: bold;
  }
`;
