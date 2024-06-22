import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  background: none;
  border: none;
  cursor: pointer;

  .material-symbols-outlined {
    color: ${(props) => props.theme.error};
  }

  &:hover {
    background-color: ${(props) => props.theme["dark-error"]};
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
    }

    .material-symbols-outlined {
      color: ${(props) => props.theme["placeholder-text"]};
    }
  }
`;
