import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import faqData from '../faq.data';
const Accordion = () => {
  return (
    <div>
      {faqData.map((f) => (
        <p>{f.question}</p>
      ))}
    </div>
  );
};

export default Accordion;
