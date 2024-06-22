import { DialogTitle } from "@headlessui/react";
import { Container, DialogContainer, Overlay } from "./styles";
import React from "react";

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Dialog({ title, isOpen, onClose, children }: DialogProps) {
  return (
    <Container open={isOpen} onClose={onClose}>
      <Overlay>
        <DialogContainer>
          <div className={"header"}>
            <DialogTitle as="h3">{title}</DialogTitle>

            <button onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {children}
        </DialogContainer>
      </Overlay>
    </Container>
  );
}
