import StyledCard from './styles/card.styled';

const Card = ({ index, title, body, image }) => {
  return (
    <StyledCard layout={index % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
