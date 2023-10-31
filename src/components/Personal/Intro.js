import React from 'react';
// import { MeshAni } from './MeshGrade'
import { ProfilePic, Paragraph } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled';
import { IntroContainer,
  ColorSection,
  ProfileContainer,
  Blob,
  Hej,
  ProfileImgText,
  ProfileText,
  IconsContainer,
  Icons } from './PersonalStyle';

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
          <ProfilePic
            src="https://i.postimg.cc/cCSqbLh4/profiletemp.png"
            alt="Picture of Johanna"
            ariaLabel="Johanna's profile picture"
            centered />

          <ProfileText>
            <Name>Johanna Leonsson</Name>
            <Title>Frontend developer</Title>
            <TitleSkill>+ digital designer</TitleSkill>
          </ProfileText>
        </ProfileImgText>

        <Paragraph AboutText="AboutText">
        Hi! <br />
        I&apos;m Johanna, a Frontend Developer with a passion for creating
        engaging digital experiences.<br />
        With a background in project management and team leadership,
        I bring a deep understanding of customer interactions and
        user-focused design to my projects.<br />
        I find joy in crafting products that excel in both aesthetics and usability.<br />
        As a curious problem solver, I embrace challenges and thrive in collaborative
        environments to bring ideas and concepts to life.<br />
        If you&apos;re looking for a fresh perspective and a new team member, let&apos;s chat!

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

