import React from 'react';
import styled from 'styled-components/macro';

// OverHeader for featured project, My words and footer
const Head1 = styled.h1`
  font-size: 50px;
  color: ${(props) => props.color || 'var(--greenHead)'};
  font-weight: 700;
  margin: 40px 0 50px 0;
`;

export const Header = ({ children, color }) => {
  return <Head1 color={color}>{children}</Head1>;
};

// Profile picture Intro and foot
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;

  margin-left: ${(props) => (props.centered ? 'auto' : '0')};
  margin-right: ${(props) => (props.centered ? 'auto' : '0')};
`;

export const ProfilePic = ({ src, alt, ariaLabel, centered }) => {
  return <ProfileImage src={src} alt={alt} aria-label={ariaLabel} centered={centered} />;
};

// Project title
const Head3 = styled.h3`
  font-size: 20px;
  color: var(--fontColor);
  font-weight: 700;
  margin: 0;
`;

export const ProjectName = ({ children }) => {
  return <Head3>{children}</Head3>;
};

// Breadtext
const BreadParagraph = styled.p`
  font-size: 13px;
  color: var(--fontColormain);
  font-weight: 300;
  padding-right: 10px;
  margin: 10px 0 0 0;
  max-width: 380px;
`;

export const Paragraph = ({ children }) => {
  return <BreadParagraph>{children}</BreadParagraph>;
};

// Project image
const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100%;
  margin-bottom: 20px;
`;

export const ProjectImg = ({ src, alt, ariaLabel }) => {
  return <Image src={src} alt={alt} aria-label={ariaLabel} />;
};

// Project techtags
const ProjectTech = styled.p`
  font-size: 13px;
  font-weight: 300;
  padding-right: 10px;
  margin: 0 0 20px 10px;
  max-width: 380px;
  background-color: var(--codeTag);
  color: #FFFFFF;
  padding: 4px 4px;
`;

export const Project = ({ text }) => {
  return <ProjectTech>{text}</ProjectTech>;
};

// Project btns code and deployed
const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  margin: 0 0 10px 10px;
  background: #e0e0e0;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoverColor || '#000'};
  }
  i {
    font-size: 20px; 
    margin-right: 10px; 
  }
`;

export const ViewButton = ({ url, label, icon, hoverColor }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <Button
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      hoverColor={hoverColor}
      onClick={handleClick}>
      {icon && <i className={icon}> </i>}
      {label}
    </Button>
  );
};
