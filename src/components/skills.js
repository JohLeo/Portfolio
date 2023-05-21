import React from 'react';
import styled from 'styled-components/macro';

export const ContainerSkills = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: var(--skills);
    padding: 50px;
`
export const SkillList = styled.dl`
    text-align: center;
    line-height: 25px;
    margin: 20px auto;
    width: 190px;
    font-weight: 400;
    font-size: 18px;
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
    font-size: 14px;
`

export const Skills = () => {
  return (
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
      </SkillList>

      <SkillList>
        <SkillTool>Toolbox</SkillTool>
        <Item>Postman</Item>
        <Item>Google Cloud</Item>
        <Item>Figma</Item>
        <Item>Adobe Design</Item>
        <Item>Adobe Illustratior</Item>
        <Item>Trello</Item>
        <Item>Slack</Item>
      </SkillList>

      <SkillList>
        <SkillMore>More</SkillMore>
        <Item>Agile methodology</Item>
        <Item>Mob-programming</Item>
        <Item>Pair-programming</Item>
      </SkillList>

      <SkillList>
        <SkillItem>Upcoming</SkillItem>
        <Item>Typescript</Item>
      </SkillList>
    </ContainerSkills>
  )
}