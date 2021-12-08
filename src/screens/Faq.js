import Accordion from '../components/Accordion';
import Container from '../components/styles/container.styled';

const Faq = () => {
  return (
    <Container>
      <div
        style={{ margin: '50px 0', backgroundColor: '#d2d3d7', height: 300 }}
      >
        <Accordion />
      </div>
    </Container>
  );
};

export default Faq;
