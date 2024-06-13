import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 425px;

  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["header-background"]};
  border-radius: 0 0 10px 10px;

  p {
    color: ${(props) => props.theme["placeholder-text"]};
  }
`;
