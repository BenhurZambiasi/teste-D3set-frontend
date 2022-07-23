import styled from "styled-components";

interface IAsideProps {
  isopen: boolean;
}

export const Container = styled.div`
  background-color: #323232;
  height: 8vh;
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #474d4e;
`;

export const ContentColappse = styled.div`
  display: none;

  @media (max-width: 426px) {
    --color: rgba(255, 255, 255, 0.8);
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

    svg {
      font-size: 35px;
      color: var(--color);
    }
  }
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

  @media (max-width: 426px) {
    display: none;
  }
`;

export const AsideBar = styled.div<IAsideProps>`
  --color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  color: var(--color);
  width: 210px;
  height: 192vh;
  justify-content: center;
  padding: 1rem;
  margin-top: 200px;
  gap: 1rem;
  background-color: #323232;
  position: fixed;
  left: 0;
  -webkit-box-shadow: 6px 0px 15px -8px #000000;
  box-shadow: 6px 0px 15px -8px #000000;
  transform: ${(props) => (!props.isopen ? "translatex(-220px)" : "initial")};
  transition: all 0.5s;

  a {
    color: var(--color);
    text-decoration: none;
    display: flex;
    gap: 10px;
    font-size: 1.08rem;
    opacity: 0.7;
    transition: all 0.5s;
    svg {
      font-size: 18px;
    }
  }

  .active {
    opacity: 1;
    font-weight: bold;
  }
`;
