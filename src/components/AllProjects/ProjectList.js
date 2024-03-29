/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { Header, Paragraph } from '../lib/recomp';
import { ProjectHead, ProjectsCont, TechRow, Btns, ProjectInfo, ProjectName, ProjectImg, Project, ViewButton } from './ProjectStyle';
import { projects } from './Projects';
import { Pagination } from './pagination';

const ProjectsPerPage = 4;

export const ProjectStack = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsListRef = useRef(null);

  const indexOfLastProject = currentPage * ProjectsPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / ProjectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    projectsListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ProjectHead ref={projectsListRef}>
        <Header margin="0 0 60px 0">Projects</Header>
      </ProjectHead>

      <div>
        {currentProjects.map((project) => (
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
                {project.techs && project.techs.map((tech, index) => (
                  <Project key={`${tech}-${index}`} text={tech} />
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange} />
      </div>
    </>
  );
};
