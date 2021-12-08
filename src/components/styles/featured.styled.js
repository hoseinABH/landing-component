import styled from 'styled-components';

export const FeaturedSection = styled.section`
  background-color: ${(props) => props.bgColor || 'white'};
  margin: 45px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    margin-bottom: 0;
  }
  p {
    text-align: center;
  }
  a {
    color: #585b63;
  }

  @media (max-width: 650px) {
    padding: 40px;
  }
`;

export const CardRowContainer = styled.div`
  margin-top: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);
  display: flex;
  max-width: 100%;
  width: 1200px;
  overflow-x: auto;
  height: 100%;
  padding: 25px 5px;
  div:not(:first-child) {
    margin-left: 30px;
  }
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border: 1px solid #d2d3d7;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d2d3d7;
    border-radius: 25px;
  }
`;

export const PodcastsRow = styled.div`
  margin-top: clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem);
  display: flex;
  max-width: 100%;
  width: 1200px;
  height: 100%;
  justify-content: center;
  transition-timing-function: linear;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  & > a {
    margin: 15px 10px;
  }
`;

export const PodcastCard = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  word-break: break-all;
  transition-duration: 500ms;
  :hover {
    transform: scale(1.02);
  }
`;

export const PodcastImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 25px;
`;

export const PodcastContent = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  padding: 25px;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  p {
    text-align: justify;
    opacity: 1;
  }

  @media (max-width: 1150px) {
    font-size: 12px;
    bottom: 5px;
  }
`;
