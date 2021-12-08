import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1>Contact Us</h1>
        <label>Name</label>
        <input name="name" />
        <label>Address</label>
        <input name="address" />
        <label>Date</label>
        <input name="date" type="date" />
        <label>Phone Number</label>
        <input name="phoneNumber" type="tel" />

        <button type="submit">Submit</button>
      </Form>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  background-color: #edebfd;
  padding: 50px;
  margin: 50px 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;
const Form = styled.form`
  max-width: 680px;
  background-color: #fff;
  border: 1px solid #d2d3d7;
  border-radius: 25px;
  padding: 50px;
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid #d2d3d7;
    transition-property: all;
    transition-duration: 500ms;
    margin-top: 5px;
    :focus {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1),
        0px 8px 8px 1px rgba(0, 0, 0, 0.07), 0px 3px 8px 2px rgba(0, 0, 0, 0.08),
        0px 0px 0px 2px #3740ff;
    }
  }

  button {
    padding: 15px 0;
    background-color: #3740ff;
    color: white;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    :active {
      filter: brightness(95%); /*awsome keyword :)*/
    }
  }
`;

export default ContactUs;
