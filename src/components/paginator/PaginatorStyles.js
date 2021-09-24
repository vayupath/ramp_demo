import styled from 'styled-components';

export const PagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Page = styled.span`
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0 0.2em;
  border-bottom: ${(props) => (props.selected ? '4px solid green' : 'none')};
`;
