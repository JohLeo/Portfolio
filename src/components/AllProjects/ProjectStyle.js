import React from 'react';
import styled from 'styled-components/macro';

export const Center = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
`

export const ProjectHead = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 60px 20px 10px 20px;

@media (min-width: 667px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--background);
  max-width: 320px;
  margin: 20px 0 20px 0;
`

export const Btns = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 0 0 40px 0;

@media (min-width: 769px) {
    flex-direction: row;
  }
`

export const ProjectInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 0 20px 10px 20px;
`

export const ProjectsCont = styled.div`
display: flex;
flex-direction: column;
justify-content: left;

@media (min-width: 667px) {
    flex-direction: row;
    align-items: self-start;
    justify-content: center;
  }
`

// Project image
const Image = styled.img`
  width: 100%;
  max-width: 390px;
  height: 100%;
  margin-bottom: 20px;

  @media (min-width: 667px) {
    margin-top: 3px;
  }
`;

export const ProjectImg = ({ src, alt, ariaLabel }) => {
  return <Image src={src} alt={alt} aria-label={ariaLabel} />;
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

// Project techtags
const ProjectTech = styled.p`
  font-size: 13px;
  font-weight: 300;
  margin: 0 10px 8px 0;
  background-color: var(--codeTag);
  color: #FFFFFF;
  padding: 4px 8px;
`;

export const Project = ({ text }) => {
  return <ProjectTech>{text}</ProjectTech>;
};

// Project btns code and deployed
const Button = styled.a`
  display: flex;
  padding: 8px 18px;
  margin: 0 10px 10px 0;
  background: #e0e0e0;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  width: fit-content;
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