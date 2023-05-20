/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 60px 20px 10px 20px;
`

export const ContainerRow = styled.div`
display: flex;
justify-content: left;
background: var(--background);
padding: 0 0 0 10px;
`

export const ContainerWrap = styled.div`
display: flex;
flex-wrap: wrap;
background: var(--background);
padding: 0 0 40px 10px;
`

export const Header = styled.h1`
  font-size: 50px;
  color: var(--greenHead);
  font-weight: 700;
  margin: 0;
`
export const ProjectImg = styled.img`
    width: 100%;
    max-width: 350px;
    height: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
`
export const ProjectName = styled.h3`
  font-size: 20px;
  color: var(--fontColor);
  font-weight: 700;
  margin: 0;
`

export const ProjectP = styled.p`
  font-size: 13px;
  color: var(--fontColormain);
  font-weight: 300;
  padding-right: 10px;
  margin: 10px 0 0 0;
  max-width: 380px;
`

export const ProjectTech = styled.p`
  font-size: 13px;
  font-weight: 300;
  padding-right: 10px;
  margin: 0 0 20px 10px;
  max-width: 380px;
  background-color: var(--codeTag);
  color: #FFFFFF;
  padding: 4px 4px;
`

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

export const FeaturedProject = () => {
  return (
    <>
      <Container>
        <Header>Featured projects</Header>
        <ProjectImg src="https://i.postimg.cc/bY5FXT8T/guess-who.png" alt="The Pain" />
        <ProjectName>Guess who - the game</ProjectName>
        <ProjectP>
              A game made out of Ai lorem ipsum dores lirum
              A game made out of Ai lorem ipsum dores lirum
              A game made out of Ai lorem ipsum dores lirum
        </ProjectP>
      </Container>

      <ContainerRow>
        <ProjectTech>HTML</ProjectTech>
        <ProjectTech>Javascript</ProjectTech>
      </ContainerRow>

      <ContainerWrap>
      <ViewButton
        url="https://www.example.com"
        icon="fa-brands fa-github"
        label="View the code"
        hoverColor="var(--codeBtn)" />
      <ViewButton
        url="https://www.example.com"
        label="Live demo"
        icon="fa-solid fa-globe"
        hoverColor="var(--demoBtn)" />

      </ContainerWrap>

    </>
  )
};