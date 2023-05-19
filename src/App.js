import React from 'react'
import styled from 'styled-components';
import { TechStack } from 'components/tech'
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
    </Container>

  )
}
