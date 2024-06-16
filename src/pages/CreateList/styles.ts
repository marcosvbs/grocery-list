import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 425px;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateListForm = styled(Form.Root)``;

export const ListDataField = styled(Form.Field)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["container-background"]};
  border-radius: 6px;

  label {
    width: 100%;

    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Text", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    line-height: 1.5;
  }

  input {
    width: 100%;
    height: 40px;

    padding-left: 0.5rem;

    color: ${(props) => props.theme["body-text"]};
    font-family: "Red Hat Text", sans-serif;
    font-weight: 400;
    font-size: 0.875;
    line-height: 1.5;

    background-color: ${(props) => props.theme.background};
    border: none;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme["placeholder-text"]};
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 425px;

  margin-top: auto;

  gap: 1rem;
`;
