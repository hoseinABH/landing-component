import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <IconContext.Provider value={{ color: '#3740ff' }}>
      <AccordionSection open={open} onToggle={(e) => setOpen(e.target.open)}>
        <summary>
          <span>{question}</span>
          <IconButton isOpen={open}>
            <FiChevronDown />
          </IconButton>
        </summary>
        <AccordionContent>
          <p>{answer}</p>
        </AccordionContent>
      </AccordionSection>
    </IconContext.Provider>
  );
};

const AccordionSection = styled.details`
  background-color: #f8f9fa;
  border: 1px solid #d2d3d7;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  position: relative;
  summary {
    list-style: none;
    padding: 15px;
    user-select: none;
    outline: none;
  }
  :first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  :last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  :not(:last-child) {
    border-bottom: none;
  }
`;

const IconButton = styled.span`
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d2d3d7;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 10px;
  transform: ${(props) => props.isOpen && `rotate(180deg)`};
  :hover {
    background-color: #f8f9fa;
  }
`;

const AccordionContent = styled.div`
  border-top: 1px solid #e2e8f0;
  cursor: default;
  padding: 15px;
  p {
    font-size: 14px;
  }
`;

export default Accordion;
