import styled from "styled-components";

interface ButtonProps {
  checkMode?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 6px;

  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 0.875;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) =>
    props.checkMode
      ? props.theme["secondary-brand"]
      : props.theme["primary-brand"]};

  &:hover {
    background-color: ${(props) =>
      props.checkMode
        ? props.theme["dark-secondary-brand"]
        : props.theme["dark-primary-brand"]};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme["container-background"]};

  &:hover {
    background-color: ${(props) =>
      props.checkMode
        ? props.theme["dark-secondary-brand"]
        : props.theme["dark-primary-brand"]};
  }
`;
