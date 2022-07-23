import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1124px;
  flex-direction: column;
  margin: 2rem auto;
  padding: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const ContainerInfoPerson = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

export const ContainerAddPhone = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 426px) {
    justify-content: center;
    button {
      width: 100%;
    }
  }
`;

export const ContainerPhone = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    width: 23%;
    min-width: 200px;
    margin-right: 1rem;
    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 426px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 426px) {
    justify-content: center;
  }
`;
