import React from 'react';
import { ProfilePic, Paragraph } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled';
import { IntroContainer, ColorSection, ProfileContainer, Blob, Hej, ProfileImgText, ProfileText, IconsContainer, Icons } from './PersonalStyle';

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
        I&apos;m Johanna, a curious doer passionate
        about creating engaging web experiences.
        My approach to web projects is influenced by my
        foundation in communication and design, allowing me to blend <br />
        user-focused functionality with visual aesthetics.<br />
        My drive to continually learn and grow fuels my
        ability to stay current with the latest
        trends and technologies. I approach challenges
        with a practical mindset and attention to detail
        to ensure your needs are met.
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

