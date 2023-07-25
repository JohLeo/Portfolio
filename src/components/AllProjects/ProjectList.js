import React from 'react';
import { Header, Paragraph } from '../lib/recomp';
import { ProjectHead, ProjectsCont, TechRow, Btns, ProjectInfo, ProjectName, ProjectImg, Project, ViewButton } from './ProjectStyle';

export const ProjectStack = () => {
  return (

    <>
      <ProjectHead>
        <Header>Featured projects</Header>
      </ProjectHead>

      <ProjectsCont>
        <ProjectInfo>
          <ProjectImg
            src="https://i.postimg.cc/bY5FXT8T/guess-who.png"
            alt="The Pain"
            ariaLabel="Guess Who Game" />
        </ProjectInfo>

        <ProjectInfo>
          <ProjectName>Guess who - the game</ProjectName>
          <Paragraph>
                  A game made out of Ai lorem ipsum dores lirum
                  A game made out of Ai lorem ipsum dores lirum
                  A game made out of Ai lorem ipsum dores lirum
          </Paragraph>

          <TechRow>
            <Project text="HTML" />
            <Project text="Javascript" />
            <Project text="React" />
          </TechRow>

          <Btns>
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
          </Btns>
        </ProjectInfo>
      </ProjectsCont>
    </>

  );
};
