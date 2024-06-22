import styled from "styled-components";
import { Dialog, DialogPanel } from "@headlessui/react";

export const Container = styled(Dialog)``;

export const Overlay = styled.div`
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
`;

export const DialogContainer = styled(DialogPanel)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 425px;
  padding: 1rem;

  background-color: ${(props) => props.theme["container-background"]};
  border: none;
  border-radius: 6px;

  .header {
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
`;
