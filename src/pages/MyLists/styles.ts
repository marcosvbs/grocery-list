import { Dialog } from "@headlessui/react";
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

export const ListsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;
`;

export const ListCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme["container-background"]};

  border-left: 3px ${(props) => props.theme["body-text"]} solid;
  border-radius: 6px;

  a {
    flex-grow: 1;
    text-decoration: none;
  }
  p {
    flex-grow: 1;

    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
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

  &:hover {
    background-color: ${(props) => props.theme["dark-error"]};
  }

  .material-symbols-outlined {
    color: ${(props) => props.theme.error};
  }
`;

export const CreateListDialog = styled(Dialog)`
  .overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0 1rem;

    background-color: rgba(20, 20, 20, 0.4);
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
  }

  .dialogContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
    max-width: 425px;
    padding: 1rem;

    background-color: ${(props) => props.theme["container-background"]};
    border: none;
    border-radius: 6px;
  }

  .dialogHeader {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      flex-grow: 1;
    }

    button {
      border: none;
      background: none;
    }
  }

  .listNameField {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;

    input {
      max-height: 40px;

      padding: 0.75rem;

      background-color: ${(props) => props.theme.background};
      border: none;
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme["placeholder-text"]};
      }
    }
  }
`;
