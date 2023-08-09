import React from 'react';
import styled from 'styled-components/macro';
import { Header } from './lib/recomp';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background: var(--tech);
padding: 100px 20px 100px 20px;

@media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;
    text-align: left;
  }
`

export const TechText = styled.p`
  font-size: 15px;
  color: var(--fontColormain);
  font-weight: 300;
  line-height: 28px;
  padding-right: 10px;
  margin: 50px 0 0 20px;
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
export const TagMob = styled.span`
    background-color: orange;
    color: #FFFFFF;
    padding: 3px 4px;
`

export const TechStack = () => {
  return (
    <Container>
      <Header margin="25px 0 0 0" color="var(--greenHead)">
        Tech
      </Header>
      <TechText>
        HTML, CSS, Flexbox, <TagJs>JavaScript,</TagJs> ES6,
        JSX, React, <TagReact>React</TagReact> Hooks, Redux,
        Node.js, Mongo DB, Web Accessibly, API:s,
        <TagMob>mob-programming,</TagMob> pair-programming, Github.
      </TechText>

    </Container>
  )
};