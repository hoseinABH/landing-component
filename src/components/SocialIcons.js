import StyledSocialIcons from './styles/social-icons.styled';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
