import styled from 'styled-components';

const FeatureCard = ({ imgSrc, count, type, desc }) => {
  return (
    <CardContainer href="/">
      <CardHeader>
        <p>{type}</p>
        <CourseCount>
          <span>{count}</span>
          <svg
            height="17"
            viewBox="0 0 24 24"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="mortarboard"
            role="img"
            class="icon"
            fill="currentColor"
          >
            <path d="M12.51 3.47a1.29 1.29 0 0 0-1 0L3 7a1.33 1.33 0 0 0 0 2.44L11.49 13a1.38 1.38 0 0 0 1 0L21 9.44A1.33 1.33 0 0 0 21 7Z"></path>
            <path d="M4.71 14.07a1.33 1.33 0 0 1 1.82-1.24l5 2a1.35 1.35 0 0 0 1 0l5-2a1.33 1.33 0 0 1 1.82 1.24v3.1a1.32 1.32 0 0 1-.88 1.25l-6 2.13a1.24 1.24 0 0 1-.89 0l-6-2.13a1.32 1.32 0 0 1-.88-1.25Z"></path>
          </svg>
        </CourseCount>
      </CardHeader>
      <CardImage src={imgSrc} alt="" />

      <CardContent>
        <p>{desc}</p>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.a`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #d2d3d7;
  text-decoration: none;
  position: relative;
  max-width: 25rem;
  width: 100%;
  min-width: 23rem;
  height: 100%;
  word-break: break-all;
  transition-duration: 400ms;
  transition-property: all;
  :hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1),
      0px 8px 8px 1px rgba(0, 0, 0, 0.07), 0px 3px 8px 2px rgba(0, 0, 0, 0.08),
      0px 0px 0px 2px #3740ff;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const CourseCount = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #3740ff;
  padding: 5px 10px;
  border-radius: 25px;
  color: white;
  span {
    font-size: 14px;
    margin-right: 3px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  margin-top: 10px;
  padding-right: 25px;
  p {
    font-size: 13px;
    color: #000;
    text-align: justify;
  }
`;

export default FeatureCard;
