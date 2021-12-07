import { useRef } from 'react';
import Button from '../components/styles/button.styled';
import Container from '../components/styles/container.styled';
import Input from '../components/styles/input.styled';
import StyledLoginCard from '../components/styles/login-card.styled';

const Login = () => {
  const passRef = useRef(null);
  const usernameRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <StyledLoginCard>
        <h2>Login Form</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <Input ref={usernameRef} name="username" />

          <label htmlFor="password">Password</label>
          <Input ref={passRef} type="password" name="password" />

          {/* Submit Button */}
          <Button
            style={{ marginTop: '20px' }}
            type="submit"
            bgColor="black"
            color="white"
          >
            Login
          </Button>
        </form>
      </StyledLoginCard>
    </Container>
  );
};

export default Login;
