import React from 'react'
import styled from 'styled-components';
import { Skills } from 'components/skills';
import { TechStack } from 'components/tech'
import { ProjectStack } from 'components/projects';
import { Footer } from 'components/footer';
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
