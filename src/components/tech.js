import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--tech);
padding: 100px 20px 100px 20px;
`
export const TechText = styled.p`
  font-size: 15px;
  color: var(--fontColormain);
  font-weight: 300;
  line-height: 28px;
  padding-right: 10px;
  margin: 20px 0 0 20px;
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
      <TechText>
        HTML, CSS, Flexbox, <TagJs>JavaScript,</TagJs> ES6,
        JSX, React, <TagReact>React</TagReact> Hooks, Redux,
        Node.js, Mongo DB, Web Accessibly, API:s,
        <TagMob>mob-programming,</TagMob> pair-programming, Github.
      </TechText>

    </Container>
  )
};