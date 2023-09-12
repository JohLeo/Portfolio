import React from 'react';
import styled from 'styled-components/macro';
import { Header } from './lib/recomp';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 70vh;
align-items: center;
text-align: center;
background: var(--tech);
justify-content: center;

@media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 80px;
    text-align: left;
  }
`

export const TechText = styled.p`
  font-size: 18px;
  color: var(--fontColormain);
  font-weight: 300;
  line-height: 28px;
  margin: 50px 0;
  max-width: 380px;
`

export const TagJs = styled.span`
    background-color: pink;
    color: #FFFFFF;
    padding: 3px 4px;
`
export const TagReact = styled.span`
    background-color: green;
    color: #FFFFFF;
    padding: 3px 4px;
`
export const TagNode = styled.span`
    background-color: orange;
    color: #FFFFFF;
    padding: 3px 4px;
`

export const TechStack = () => {
  return (
    <Container>
      <Header margin="15px 0">
        Tech
      </Header>
      <TechText>
        HTML, CSS, <TagJs>JavaScript ES6,</TagJs> JSX,
        Responsive design, <TagReact>React,</TagReact> React Hooks, Redux,
        MongoDB, <TagNode>Node.js,</TagNode> Express.js, Web-accessibility, APIs,
        mob-programming, pair-programming, Github, Git
      </TechText>

    </Container>
  )
};