import styled from 'styled-components';

const Flex = styled.div`
  display: flex;

  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
