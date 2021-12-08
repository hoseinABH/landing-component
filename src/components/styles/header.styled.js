import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-bottom: 40px;
  }
`;
const StyledLink = styled(Link)`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 20px;
    color: #3740ff;
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 40px 0 30px;
  }
`;

export { StyledHeader, Nav, Logo, Image, StyledLink };
