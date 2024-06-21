import styled from "styled-components";

export const LoadingSpinContainer = styled.div<{
  $size: number;
}>`
  display: flex;
  align-self: center;
  justify-content: center;

  max-width: ${(props) => props.$size + "px"};
  max-height: ${(props) => props.$size + "px"};
`;
