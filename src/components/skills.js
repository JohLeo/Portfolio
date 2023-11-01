import React from 'react';
import styled from 'styled-components/macro';
import { Header } from './lib/recomp'

export const HeadContainerSkill = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background: var(--skills);
padding: 100px 0 0;
`

export const ContainerSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--skills);
    padding: 20px 0 150px;

    @media (min-width: 668px) and (max-width: 1023px) {
      padding: 20px 0 120px;
    }

    @media (min-width: 1024px) {
      padding: 20px 0 120px;
    }
`

export const SkillList = styled.dl`
    text-align: center;
    line-height: 25px;
    margin: 20px auto;
    width: 200px;
    font-weight: 400;
    font-size: 20px;

    @media (min-width: 668px) and (max-width: 1023px) {
        width: 260px;
        margin: 20px 20px 30px 20px;
    }

    @media (min-width: 1024px) {
      margin: 20px;
    }
`
export const SkillCode = styled.dt`
    display: inline-block;
    margin: 0 0 10px 0;
    color: #fff;
    background: var(--codeSkill);
    padding: 4px;
`
export const SkillTool = styled.dt`
    display: inline-block;
    margin: 0 0 10px 0;
    color: #fff;
    background: var(--codeTool);
    padding: 4px;
`
export const SkillMore = styled.dt`
    display: inline-block;
    margin: 0 0 10px 0;
    color: #fff;
    background: var(--codeMore);
    padding: 4px;
`
export const SkillItem = styled.dt`
    display: inline-block;
    margin: 0 0 10px 0;
    color: #fff;
    background: var(--codeUp);
    padding: 4px;
`

export const Item = styled.dd`
    margin: 0;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;

    @media (min-width: 668px) and (max-width: 1023px) {
        line-height: 35px;
    }

    @media (min-width: 1024px) {
      line-height: 35px;
    }
`

export const Skills = () => {
  return (
    <>
      <HeadContainerSkill>
        <Header color="var(--fontColormain)">
        Skills
        </Header>
      </HeadContainerSkill>
      <ContainerSkills>
        <SkillList>
          <SkillCode>Code</SkillCode>
          <Item>HTML5</Item>
          <Item>CSS3</Item>
          <Item>JavaScript ES6</Item>
          <Item>React</Item>
          <Item>Redux</Item>
          <Item>Styled components</Item>
          <Item>Node.js</Item>
          <Item>GitHub</Item>
          <Item>Mongo</Item>
          <Item>Typescript</Item>
        </SkillList>

        <SkillList>
          <SkillTool>Toolbox</SkillTool>
          <Item>Postman</Item>
          <Item>Google Cloud</Item>
          <Item>Figma</Item>
          <Item>Stack Overflow</Item>
          <Item>Postman</Item>
          <Item>Compass</Item>
          <Item>ChatGPT</Item>
          <Item>Adobe CS</Item>
          <Item>Google Cloud Platform</Item>
        </SkillList>

        <SkillList>
          <SkillMore>More</SkillMore>
          <Item>Agile methodology</Item>
          <Item>Mob-programming</Item>
          <Item>Pair-programming</Item>
          <Item>Concept Development</Item>
          <Item>Database Management</Item>
          <Item>Git</Item>
        </SkillList>

        <SkillList>
          <SkillItem>Upcoming</SkillItem>
          <Item>React Native</Item>
          <Item>Next.js</Item>
        </SkillList>
      </ContainerSkills>
    </>
  )
}