import React from 'react';
import { ProfilePic, Paragraph } from '../lib/recomp'
import { Name, Title, TitleSkill } from '../lib/styled';
import { IntroContainer, ColorSection, ProfileContainer, ProfileImgText, ProfileText, IconsContainer, Icons } from './PersonalStyle';

export const TheProfile = () => {
  return (
    <IntroContainer>
      <ColorSection />
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
        Hi! <br />
        I&apos;m Johanna, a full-stack developer with a passion for crafting web experiences.
        My journey in web development has equipped me with valuable technical skills and
        a creative mindset. My background in communications and design
        gives me a fresh perspective to web development projects.
        Having worked in various industries and roles, I understands the power
        of collaboration and strive to delivering exceptional results.<br /><br />

        My eagerness to learn and grow drives me to continuously enhance my abilities.
        I take great care in paying attention to aesthetics and user experience,
        striving to create immersive web experiences that resonate with users.<br /><br />

        With a focus on problem-solving and a commitment to delivering quality work,
        I approach every project with diligence and precision.
        Your web development needs are important to me, and I will do my best to meet
        them.<br /><br />

        If you&apos;re looking for a dedicated developer to bring your ideas to life,
        I&apos;d be thrilled to hear from you — I&apos;m here to listen and explore
        new opportunities with excitement!
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

