import React from 'react';
import styled from 'styled-components/macro';
import { Header, ProfilePic } from '../lib/recomp'
import { Container, Name, Title, TitleSkill } from '../lib/styled'

export const Mail = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--fontColor);
  margin-top: 40px;
  text-decoration: none;
  line-height: 30px;
  &:hover {
      color: var(--Hover);
    }
`
export const Phone = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: var(--fontColor);
  margin: 0;
  text-decoration: none;
  &:hover {
      color: var(--Hover);
    }
`

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
`
export const Icons = styled.a`
  margin: 20px 0 40px 20px;
  font-size: 20px;
  color: var(--icons);
  padding: 0 9px;
  text-decoration: none;

    &:hover {
      color: var(--Hover);
    }
`

export const Footer = () => {
  return (
    <>
      <Container>
        <Header color="var(--blueHead)">Lets connect!</Header>
        <ProfilePic
          src="https://i.postimg.cc/MKDz5Qww/jl.jpg"
          alt="Picture of Johanna"
          ariaLabel="Johanna's profile picture" />

        <Name>Johanna Leonsson</Name>
        <Title>Frontend developer</Title>
        <TitleSkill>+ digital designer</TitleSkill>

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

      </Container>
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
    </>
  )
}