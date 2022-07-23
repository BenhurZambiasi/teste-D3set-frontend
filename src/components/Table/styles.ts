import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
`;

export const TableContainer = styled.table`
  --color: rgba(255, 255, 255, 0.8);
  color: var(--color);
  width: 100%;
  text-align: left;
  tr,
  td,
  th {
    border: 2px solid #323232;
    padding: 0.5rem 1rem;
  }

  thead {
    .th_action {
      text-align: center;
    }
  }

  .actions {
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    svg {
      cursor: pointer;
    }
  }
`;
