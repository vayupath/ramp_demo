import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    clip-path: polygon(3% 0%, 3% 0%, 3% 100%, 3% 100%);
  }

  to {
    clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
  }
`;

export const StyledLoader = styled.div`
  height: 0.5rem;
  width: 8rem;
  clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
  background-color: var(--primary-color);
  animation: ${pulse} 1s linear infinite alternate;
`;
