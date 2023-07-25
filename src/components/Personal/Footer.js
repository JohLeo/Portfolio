import React from 'react';
import { Header, ProfilePic } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled'
import { ProfileContainer, ProfileImgText, ProfileText, Mail, Phone, IconsContainer, Icons } from './PersonalStyle';

export const Footer = () => {
  return (
    <ProfileContainer>
      <Header color="var(--blueHead)">
        Lets connect!
      </Header>

      <ProfileImgText>
        <ProfilePic
          src="https://i.postimg.cc/MKDz5Qww/jl.jpg"
          alt="Picture of Johanna"
          ariaLabel="Johanna's profile picture" />

        <ProfileText>
          <Name>Johanna Leonsson</Name>
          <Title>Frontend developer</Title>
          <TitleSkill>+ digital designer</TitleSkill>
        </ProfileText>
      </ProfileImgText>

      <Mail
        href="mailto:johanna@leonsson.se"
        aria-label="Email adress">
            johanna@leonsson.se
      </Mail>

      <Phone
        href="tel:+4676380047"
        aria-label="Phone number">
            +46(0)706380047
      </Phone>

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
  )
}