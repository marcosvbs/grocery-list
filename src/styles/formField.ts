import styled from "styled-components";
import { Field } from "@headlessui/react";

export const FormField = styled(Field)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  input {
    display: flex;

    max-height: 40px;
    width: 100%;

    padding: 0.75rem;

    background-color: ${(props) => props.theme.background};
    border: none;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme["placeholder-text"]};
    }
  }
`;

export const FieldRow = styled.div`
  display: flex;
  gap: 1rem;
`;
