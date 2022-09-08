import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => (props?.width ? `${props?.width}px` : "160px")};
  height: ${(props) => (props?.height ? `${props?.height}px` : "40px")};
`;
