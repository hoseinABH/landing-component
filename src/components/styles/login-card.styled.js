import styled from 'styled-components';

const StyledLoginCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 420px;
    width: 100%;
  }
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export default StyledLoginCard;
