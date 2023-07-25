import React from 'react'
import styled from 'styled-components';
import { Skills } from 'components/skills';
import { TechStack } from 'components/tech'
import { ProjectStack } from 'components/AllProjects/ProjectList'
import { Footer } from 'components/Foot/Footer';
import { TheProfile } from './components/intro';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
`

export const App = () => {
  return (
    <Container>
      <TheProfile />
      <TechStack />
      <ProjectStack />
      <Skills />
      <Footer />
    </Container>

  )
}
