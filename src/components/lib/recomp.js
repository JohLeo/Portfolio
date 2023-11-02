import React from 'react';
import styled from 'styled-components/macro';

// OverHeader for featured project, My words and footer
const Head1 = styled.h1`
  font-size: 50px;
  color: ${(props) => props.color || 'var(--greenHead)'};
  font-weight: 700;
  margin: ${(props) => props.margin || '0 0 30px 0'};
`;

export const Header = ({ children, color, margin }) => {
  return <Head1 color={color} margin={margin}>{children}</Head1>;
};

// Profile picture Intro and foot
const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: var(--skills);

  margin-left: ${(props) => (props.centered ? 'auto' : '0')};
  margin-right: ${(props) => (props.centered ? 'auto' : '0')};

  @media screen and (max-width: 667px) {
    margin-bottom: ${(props) => (props.centered ? '25px' : '0')};
  }
`;

export const ProfilePic = ({ src, alt, ariaLabel, centered }) => {
  return <ProfileImage src={src} alt={alt} aria-label={ariaLabel} centered={centered} />;
};

// Breadtext
const BreadParagraph = styled.p`
  font-size: 16px;
  color: var(--fontColormain);
  padding-right: 10px;
  margin: 10px 0 0 0;
  max-width: 310px;

  &.AboutText {
    margin: 20px 0 0 0;
    max-width: 400px;

    @media (min-width: 668px) {
      margin: 40px 0 0 0px;
    }
  }
`;

export const Paragraph = ({ children, AboutText }) => {
  return <BreadParagraph className={AboutText}>{children}</BreadParagraph>;
};
