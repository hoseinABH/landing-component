import styled from 'styled-components';
import FeatureCard from '../components/FeatureCard';
import {
  CardRowContainer,
  FeaturedSection,
} from '../components/styles/featured.styled';

// data
import webDevData from '../webdev.data';

const Features = () => {
  return (
    <>
      <FeaturedSection bgColor="#f8f9fa">
        <h2>Featured courses</h2>
        <p>
          Explore our structured learning paths to discover everything you need
          to know about <br /> building for the modern web.
        </p>

        <a href="/">See all</a>
        <CardRowContainer>
          {webDevData.map((data) => (
            <div key={data.id}>
              <FeatureCard {...data} />
            </div>
          ))}
        </CardRowContainer>
      </FeaturedSection>
      <FeaturedSection>
        <h2>Podcasts and Shows</h2>
        <p>
          Level up your web development skills by listening to podcasts from
          Google <br /> Developers.
        </p>
        <a href="/">See all</a>

        <PodcastsRow>
          <PodcastCard href="/">
            <PodcastImage
              src="https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/XXZm5qRstbVipZB9op3U.jpg?auto=format&w=845"
              alt=""
            />
            <PodcastContent>
              <span>Show</span>
              <h1>Designing in the browser</h1>
              <p>
                Designer Vs Developer artwork Designing in the browser Designing
                in the Browser explores the intersection of design and front-end
                development, teaching you how to build beautiful UIs with modern
                web standards in mind.
              </p>
            </PodcastContent>
          </PodcastCard>
          <PodcastCard href="/">
            <PodcastImage
              src="https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/ipfeeYVWUsDER4LRnUkf.jpg?auto=format&w=845"
              alt=""
            />
            <PodcastContent>
              <span>Show</span>
              <h1>Designing in the browser</h1>
              <p>
                Designer Vs Developer artwork Designing in the browser Designing
                in the Browser explores the intersection of design and front-end
                development, teaching you how to build beautiful UIs with modern
                web standards in mind.
              </p>
            </PodcastContent>
          </PodcastCard>
        </PodcastsRow>
      </FeaturedSection>
    </>
  );
};

const PodcastsRow = styled.div`
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
    margin: 15px 15px;
  }
`;

const PodcastCard = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  transition-duration: 500ms;
  :hover {
    transform: scale(1.02);
  }
`;

const PodcastImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 25px;
`;

const PodcastContent = styled.div`
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

export default Features;
