import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  height: 100vh;
  /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
  background-color: ${({ theme }) => theme.colorAccent};
  background-image: url("${({ source }) => source}");
`;
