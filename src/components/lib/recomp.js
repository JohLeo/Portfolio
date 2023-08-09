import React from 'react';
import styled from 'styled-components/macro';

// OverHeader for featured project, My words and footer
const Head1 = styled.h1`
  font-size: 50px;
  color: ${(props) => props.color || 'var(--greenHead)'};
  font-weight: 700;
  margin: ${(props) => props.margin || '0 0 50px 0'};
`;

export const Header = ({ children, color, margin }) => {
  return <Head1 color={color} margin={margin}>{children}</Head1>;
};

// Profile picture Intro and foot
const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;

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
  font-size: 13px;
  color: var(--fontColormain);
  font-weight: 400;
  padding-right: 10px;
  margin: 10px 0 0 0;
  max-width: 310px;

  &.AboutText {
    margin: 40px 0 0;
    padding: 0;
    max-width: 390px;
  }
`;

export const Paragraph = ({ children, AboutText }) => {
  return <BreadParagraph className={AboutText}>{children}</BreadParagraph>;
};
