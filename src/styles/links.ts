import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  checkMode?: boolean;
}

const defaultStyles = `
  width: 100%;
  max-width: 425px;
  max-height: 40px;
  padding: 0.75rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;

  cursor: pointer;
`;

export const PrimaryLink = styled(Link)<LinkProps>`
  ${defaultStyles}

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

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme["placeholder-text"]};
  }
`;

export const SecondaryLink = styled(Link)<LinkProps>`
  ${defaultStyles}

  background-color: ${(props) => props.theme["container-background"]};

  &:hover {
    background-color: ${(props) =>
      props.checkMode
        ? props.theme["dark-secondary-brand"]
        : props.theme["dark-primary-brand"]};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme["placeholder-text"]};
  }
`;

export const TertiaryLink = styled(Link)<LinkProps>`
  ${defaultStyles}

  background-color: none;

  &:hover {
    color: ${(props) =>
      props.checkMode
        ? props.theme["dark-secondary-brand"]
        : props.theme["dark-primary-brand"]};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme["placeholder-text"]};
  }
`;
