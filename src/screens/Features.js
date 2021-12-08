import FeatureCard from '../components/FeatureCard';
import {
  CardRowContainer,
  FeaturedSection,
  PodcastCard,
  PodcastContent,
  PodcastImage,
  PodcastsRow,
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
              <span>Podcast</span>
              <h1>Podcast The CSS Podcast</h1>
              <p>
                Cascading Style Sheets (CSS) is the web’s core styling language.
                For web developers, It’s one of the quickest technologies to get
                started.
              </p>
            </PodcastContent>
          </PodcastCard>
        </PodcastsRow>
      </FeaturedSection>
    </>
  );
};

export default Features;
