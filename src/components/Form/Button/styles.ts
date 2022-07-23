import styled from "styled-components";

export const ButtonComponent = styled.button`
  --color: rgba(255, 255, 255, 0.8);
  min-width: 100px;
  padding: 0.4rem;
  white-space: nowrap;
  border-radius: 3px;
  color: var(--color);
  background-color: transparent;
  border: 2px solid #323232;
  transition: all 0.5s;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    color: #323232;
    background-color: var(--color);
    border-color: #323232;
  }
`;
