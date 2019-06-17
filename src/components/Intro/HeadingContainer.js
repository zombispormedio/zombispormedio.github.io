import styled from "@emotion/styled";

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorTextSecondary};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
