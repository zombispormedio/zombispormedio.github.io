import styled from "@emotion/styled";

export default styled.header`
  width: 100%;
  position: absolute;
  z-index: 500;
  perspective: 2000px;
  color: ${({ theme }) => theme.colorTextSecondary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
