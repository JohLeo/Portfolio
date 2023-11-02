import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { Header } from './lib/recomp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
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
`;

const TechText = styled(motion.p)`
  font-size: 18px;
  color: var(--fontColormain);
  font-weight: 300;
  line-height: 28px;
  margin: 50px 0;
  max-width: 380px;
  opacity: 0;
`;

const TagJs = styled.span`
  background-color: pink;
  color: #FFFFFF;
  padding: 3px 4px;
`;
const TagReact = styled.span`
  background-color: green;
  color: #FFFFFF;
  padding: 3px 4px;
`;
const TagNode = styled.span`
  background-color: orange;
  color: #FFFFFF;
  padding: 3px 4px;
`;

export const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const techTextElement = document.querySelector('.tech-text');

      if (techTextElement) {
        const boundingBox = techTextElement.getBoundingClientRect();
        const isComponentVisible = boundingBox.top < window.innerHeight;
        setIsVisible(isComponentVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header margin="15px 0">Tech</Header>
      <TechText
        className="tech-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}>
        HTML, CSS, <TagJs>JavaScript ES6,</TagJs> JSX, Responsive design,{' '}
        <TagReact>React,</TagReact> React Hooks, Redux, MongoDB,{' '}
        <TagNode>Node.js,</TagNode> Express.js, Web-accessibility, APIs,
        mob-programming, pair-programming, Git
      </TechText>
    </Container>
  );
};
