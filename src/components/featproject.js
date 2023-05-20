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
    </>
  )
};