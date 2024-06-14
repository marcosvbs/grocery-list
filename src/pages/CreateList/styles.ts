import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 425px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
`;

export const ActionBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
