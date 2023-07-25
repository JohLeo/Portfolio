import React from 'react';
import { ProfilePic, Paragraph } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled';
import { ProfileContainer, ProfileImgText, ProfileText, IconsContainer, Icons } from './PersonalStyle';

export const TheProfile = () => {
  return (

    <ProfileContainer>
      <ProfileImgText>
        <ProfilePic
          src="https://i.postimg.cc/MKDz5Qww/jl.jpg"
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
        Johanna is an exceptional developer known for
        her innovative solutions and exceptional
        coding abilities. She creates user-friendly
        applications and solves complex issues with ease.
        Her drive for excellence makes her a valuable asset
        to any project and a standout in the technology field.
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

  )
}

