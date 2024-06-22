import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 425px;

  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const ActionBar = styled.div`
  display: flex;

  width: 100%;
  max-width: 425px;

  padding: 0 1rem;

  margin-top: auto;
  margin-bottom: 1rem;

  gap: 1rem;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme["container-background"]};

  border-left: 3px ${(props) => props.theme["body-text"]} solid;
  border-radius: 6px;

  p {
    flex-grow: 1;

    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    text-decoration: none;
  }

  .itemInfo {
    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    text-decoration: none;
  }
`;

export const DeleteButton = styled.button`
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
