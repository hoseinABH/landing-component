import styled from 'styled-components';
import Accordion from '../components/Accordion';
import Container from '../components/styles/container.styled';

// data
import faqData from '../faq.data';

const Faq = () => {
  return (
    <Container>
      <FaqSection>
        {faqData.map((faq) => (
          <Accordion {...faq} />
        ))}
      </FaqSection>
    </Container>
  );
};

const FaqSection = styled.section`
  margin: 50px 0;
`;

export default Faq;
