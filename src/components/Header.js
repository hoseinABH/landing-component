import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from './styles/button.styled';
import Container from './styles/container.styled';
import Flex from './styles/flex.styled';
import { Image, Logo, Nav, StyledHeader } from './styles/header.styled';
import { ACTION_TYPE } from '../store/types';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button onClick={() => navigate('auth')}>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button
              bgColor="#ff0099"
              color="#fff"
              onClick={() => dispatch({ type: ACTION_TYPE.INC, payload: 6 })}
            >
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
