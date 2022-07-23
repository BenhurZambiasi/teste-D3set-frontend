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
`;

export const ContainerAddPhone = styled.div`
  display: flex;
  justify-content: flex-end;
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
`;

export const ContainerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
