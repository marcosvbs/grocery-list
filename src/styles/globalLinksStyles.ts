import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinksProps {
  checkMode?: boolean;
}

const defaultStyles = `
  max-width: 425px;
  padding: 0.75rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 0.875;
  text-decoration: none;
`;

export const PrimaryLink = styled(Link)<LinksProps>`
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
`;

export const SecondaryLink = styled(Link)<LinksProps>`
  ${defaultStyles}

  background-color: ${(props) => props.theme["container-background"]};

  &:hover {
    background-color: ${(props) =>
      props.checkMode
        ? props.theme["dark-secondary-brand"]
        : props.theme["dark-primary-brand"]};
  }
`;
