import React from 'react';
import { Header, Paragraph } from '../lib/recomp';
import { ProjectHead, ProjectsCont, TechRow, Btns, ProjectInfo, ProjectName, ProjectImg, Project, ViewButton } from './ProjectStyle';
import { projects } from './Projects';

export const ProjectStack = () => {
  return (

    <>
      <ProjectHead>
        <Header>Featured projects</Header>
      </ProjectHead>

      <div>
        {projects.map((project) => (
          <ProjectsCont key={project.id}>
            <ProjectInfo>
              <ProjectImg
                src={project.imgSrc}
                alt={project.title}
                ariaLabel="" />
            </ProjectInfo>

            <ProjectInfo>
              <ProjectName>{project.title}</ProjectName>
              <Paragraph>
                {project.description}
              </Paragraph>

              <TechRow>
                {project.languages && project.languages.map((language) => (
                  <Project text={language} />
                ))}
              </TechRow>

              <Btns>
                <ViewButton
                  url={project.githubLink}
                  icon="fa-brands fa-github"
                  label="View the code"
                  hoverColor="var(--codeBtn)" />
                <ViewButton
                  url={project.netlifyLink}
                  label="Live demo"
                  icon="fa-solid fa-globe"
                  hoverColor="var(--demoBtn)" />
              </Btns>
            </ProjectInfo>
          </ProjectsCont>

        ))}

      </div>
    </>

  );
};
