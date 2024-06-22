import { ButtonContainer } from "./styles";

interface DeleteButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function DeleteButton({ onClick, disabled }: DeleteButtonProps) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      <span className="material-symbols-outlined">delete</span>
    </ButtonContainer>
  );
}
