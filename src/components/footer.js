import React from 'react';
import styled from 'styled-components/macro';

export const ContainerFoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const Header = styled.h1`
  font-size: 50px;
  color: var(--blueHead);
  font-weight: 700;
  margin: 50px 20px 25px 20px;
`

export const ProfilePic = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 20px;
`

export const Name = styled.h3`
  font-size: 20px;
  color: var(--greenHead);
  font-weight: 700;
  margin: 40px 0 3px 20px;
`
export const Title = styled.h2`
  font-size: 30px;
  color: var(--fontColor);
  font-weight: 700;
  margin: 0 0 0 20px;
`

export const TitleSkill = styled.h4`
  font-size: 15px;
  color: var(--fontColormain);
  font-weight: 500;
  margin: 3px 0 40px 20px;
`
export const Mail = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: var(--fontColor);
  margin: 0 0 0 20px;
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
  margin: 0 0 20px 20px;
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
      <ContainerFoot>
        <Header>Lets connect!</Header>
        <ProfilePic src="https://i.postimg.cc/MKDz5Qww/jl.jpg" alt="The Pain" />
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

      </ContainerFoot>
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