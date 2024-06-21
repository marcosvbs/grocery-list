import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 425px;

  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const ActionBar = styled.div`
  display: flex;

  width: 100%;
  max-width: 425px;

  padding: 0 1rem;

  margin-top: auto;
  margin-bottom: 1rem;

  gap: 1rem;
`;
