import React from 'react';
import { Header, Paragraph, ProjectName, ProjectImg, Project, ViewButton } from './lib/recomp';
import { Container, ContainerWrap, ContainerRow } from './lib/styled';

export const ProjectStack = () => {
  return (
    <>
      <Container>
        <Header>Featured projects</Header>
        <ProjectImg
          src="https://i.postimg.cc/bY5FXT8T/guess-who.png"
          alt="The Pain"
          ariaLabel="Guess Who Game" />
        <ProjectName>Guess who - the game</ProjectName>
        <Paragraph>
        A game made out of Ai lorem ipsum dores lirum
        A game made out of Ai lorem ipsum dores lirum
        A game made out of Ai lorem ipsum dores lirum
        </Paragraph>
      </Container>

      <ContainerRow>
        <Project text="HTML" />
        <Project text="Javascript" />
        <Project text="React" />
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

      <Container>
        <ProjectImg
          src="https://i.postimg.cc/bY5FXT8T/guess-who.png"
          alt="The Pain"
          ariaLabel="Guess Who Game" />
        <ProjectName>Guess who - the game</ProjectName>
        <Paragraph>
        A game made out of Ai lorem ipsum dores lirum
        A game made out of Ai lorem ipsum dores lirum
        A game made out of Ai lorem ipsum dores lirum
        </Paragraph>
      </Container>

      <ContainerRow>
        <Project text="HTML" />
        <Project text="Javascript" />
        <Project text="React" />
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

  );
};
