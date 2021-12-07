import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/styles/button.styled';
import StyledCard from '../components/styles/card.styled';
import Container from '../components/styles/container.styled';
import { ACTION_TYPE } from '../store/types';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: ACTION_TYPE.INC });
  };

  const handleDec = () => {
    dispatch({ type: ACTION_TYPE.DEC });
  };
  return (
    <Container>
      <StyledCard>
        <Button onClick={handleInc}>+</Button>
        {counter}
        <Button onClick={handleDec}>-</Button>
      </StyledCard>
    </Container>
  );
};

export default Counter;
