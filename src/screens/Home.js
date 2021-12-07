import Card from '../components/Card';
import Container from '../components/styles/container.styled';
import content from '../content';

const Home = () => {
  return (
    <Container>
      {content.map((item, index) => (
        <Card index={index} key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default Home;
