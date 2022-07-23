import styled from "styled-components";

interface IInputProps {
  error: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 62px;

  div {
    display: flex;
    align-items: center;
    svg {
      margin-left: 10px;
    }
  }
  span {
    color: #5e1d1d;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const InputComponent = styled.input<IInputProps>`
  --color: rgba(255, 255, 255, 0.8);
  padding: 0.4rem;
  border-radius: 3px;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${(props) => (props.error ? "#5e1d1d" : "#323232")};
  color: var(--color);
  &::placeholder {
    color: var(--color);
  }
`;
