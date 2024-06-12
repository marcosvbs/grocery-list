import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem 0.5rem;

  border: none;
  border-radius: 6px;

  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 0.875;
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme["primary-brand"]};

  &:hover {
    background-color: ${(props) => props.theme["dark-primary-brand"]};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme["container-background"]};

  &:hover {
    background-color: ${(props) => props.theme["dark-primary-brand"]};
  }
`;
