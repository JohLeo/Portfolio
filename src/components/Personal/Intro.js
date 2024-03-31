import React from 'react';
import JLPic from 'img/JL_sv.svg';
import { Paragraph } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled';
import { IntroContainer,
  ColorSection,
  ProfileContainer,
  Blob,
  Hej,
  ProfileImgText,
  ProfileText,
  IconsContainer,
  Icons,
  ProfileImageHover } from './PersonalStyle';

export const TheProfile = () => {
  return (
    <IntroContainer>
      <ColorSection>
        <Blob>
          <Hej>Hej!</Hej>
        </Blob>

      </ColorSection>
      <ProfileContainer>
        <ProfileImgText>
          <ProfileImageHover
            src={JLPic}
            alt="Picture of Johanna"
            ariaLabel="Johanna's profile picture" />

          <ProfileText>
            <Name>Johanna Leonsson</Name>
            <Title>Fullstack developer</Title>
            <TitleSkill>+ digital designer</TitleSkill>
          </ProfileText>
        </ProfileImgText>

        <Paragraph AboutText="AboutText">
        Hi! <br />
        I&apos;m Johanna, a fullstack developer with a genuine passion
        for crafting captivating digital experiences. With a background
        in project management and team leadership, I bring a profound
        understanding of customer interactions and user-focused design
        to my projects. I take great joy in the art of crafting products
        that seamlessly blend aesthetics with usability.
        As a devoted problem solver, I eagerly embrace challenges and
        firmly believe in the power of a collaborative environment to
        breathe life into great ideas.
        </Paragraph>
        <IconsContainer>
          <Icons
            className="icon"
            href="https://www.linkedin.com/in/johannaleonsson/"
            aria-label="Link to Johannas Linkedin"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </Icons>

          <Icons
            className="icon"
            href="https://github.com/JohLeo"
            aria-label="Link to Johannas GitHub"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </Icons>
        </IconsContainer>
      </ProfileContainer>
    </IntroContainer>

  )
}

