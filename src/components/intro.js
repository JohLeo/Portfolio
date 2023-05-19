import React from 'react';
import styled from 'styled-components';
// import profileImg from 'img/jl.jpg'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
`

export const ProfilePic = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const Name = styled.h2`
  font-size: 20px;
  color: var(--greenHead);
  font-weight: 700;
  margin: 0 0 3px 20px;
`
export const Title = styled.h1`
  font-size: 30px;
  color: var(--fontColor);
  font-weight: 700;
  margin: 0 0 0 20px;
`

export const TitleSkill = styled.h3`
  font-size: 15px;
  color: var(--fontColormain);
  font-weight: 500;
  margin: 3px 0 0 20px;
`

export const Intruduction = styled.p`
  font-size: 13px;
  color: var(--fontColormain);
  font-weight: 300;
  padding-right: 10px;
  margin: 20px 0 0 20px;
  max-width: 380px;
`

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const Icons = styled.a`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 20px;
  color: var(--icons);
  padding: 0 9px;
  text-decoration: none;

    &:hover {
      color: var(--iconsHover);
    }

`;

export const TheProfile = () => {
  return (

    <>
      <Container>
        <ProfilePic src="https://i.postimg.cc/MKDz5Qww/jl.jpg" alt="The Pain" />
        <Name>Johanna Leonsson</Name>
        <Title>Frontend developer</Title>
        <TitleSkill>+ digital designer</TitleSkill>
        <Intruduction>
        Johanna is an exceptional developer known for
        her innovative solutions and exceptional
        coding abilities. She creates user-friendly
        applications and solves complex issues with ease.
        Her drive for excellence makes her a valuable asset
        to any project and a standout in the technology field.
        </Intruduction>
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

