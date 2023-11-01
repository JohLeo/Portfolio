import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

export const IntroContainer = styled.section`
    display: flex;

    @media (min-width: 668px) and (max-width: 1023px) {
        flex-direction: column;
    }

    @media (min-width: 1024px) {
        height: 100vh;
        flex-direction: row-reverse;
    }
`

export const Hej = styled.h1`
  font-size: 30px;
  color: var(--background);
  font-family: 'Josefin sans';

  @media (min-width: 668px) and (max-width: 1023px) {
      display: none;
    }

   @media (min-width: 1024px) {
    font-size: 90px;
    margin: 115px 0 0 48px;
   }
`

const LeColor = keyframes`
  0% , 100% { background-color: var(--tech); }
  30% { background-color: var(--codeMore); }
  60% { background-color: var(--skills); }
  90% { background-color: var(--footer); }
`;

export const Blob = styled.div`
  background-color: var(--tech);
  background-size: cover;
  background-position: center center;
  height: 250px;
  width: 250px;
  animation: ${LeColor} 40s ease-in-out infinite, animate 15s ease-in-out infinite;
  transition: all 2s ease-in-out;
  
  @keyframes animate {
  0% {
    border-radius: 60% 40% 30% 80% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 40% 60% 50% 60% / 40% 60% 50% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 80% / 60% 30% 70% 40%;
  }
}

@media (min-width: 668px) and (max-width: 1023px) {
        display: none;
    }
`

export const ColorSection = styled.div`
    display: none;
    justify-content: center;
    background-color:hsla(0,77%,91%,1);
    background-image:
    radial-gradient(at 90% 0%, hsla(67,63%,89%,0.64) 0px, transparent 50%),
    radial-gradient(at 39% 21%, hsla(27,83%,80%,0.8) 0px, transparent 50%),
    radial-gradient(at 44% 56%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 54% 2%, hsla(157,39%,60%,0.9) 0px, transparent 50%),
    radial-gradient(at 75% 90%, hsla(27,82%,71%,0.85) 0px, transparent 50%),
    radial-gradient(at 15% 80%, hsla(340,73%,80%,0.43) 0px, transparent 50%),
    radial-gradient(at 42% 95%, hsla(31,51%,93%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(333,30%,69%,0.15) 0px, transparent 50%);

    @media (min-width: 668px) and (max-width: 1023px) {
        display: flex;
        height: 120px;
        clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 80%);
    }

    @media (min-width: 1024px) {
        display: flex;
        width: 50%;
        align-items: center;
    }
`

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
margin: 100px 20px 10px 20px;

@media (min-width: 667px) {
    align-items: center;
    margin: auto;
    padding: 60px 20px 10px 20px;
  }
`
export const ProfileImgText = styled.div`
display: flex;
flex-direction: column;
justify-content: left;

@media (min-width: 667px) {
    flex-direction: row;
    align-items: flex-end;
  }
`

export const ProfileText = styled.div`
display: flex;
flex-direction: column;
margin-top: 15px;

@media (min-width: 667px) {
    margin: 0 0 0 20px;
  }
`

export const Mail = styled.a`
  font-size: 20px;
  color: var(--fontColor);
  margin-top: 40px;
  text-decoration: none;
  line-height: 35px;
  &:hover {
      color: var(--Hover);
      text-decoration: underline;
      text-underline-offset: 3.5px;
      text-decoration-thickness: 1.5px;
    }
`

export const Phone = styled.a`
  font-size: 18px;
  color: var(--fontColor);
  margin: 0;
  text-decoration: none;
  &:hover {
      color: var(--Hover);
      text-decoration: underline;
      text-underline-offset: 3.5px;
      text-decoration-thickness: 1.5px;
    }
`

export const FootContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 90px 20px 10px 20px;
box-sizing: border-box;
overflow: scroll;
background-color: var(--footer);

@media (min-width: 667px) {
    align-items: center;
    margin: 0;
    padding: 60px 20px 10px 20px;
    height: 90vh;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const ConnectIcon = styled.img`
 width: 90px;
 animation: ${rotate} 6s linear infinite;
 margin: 0 20px 90px 0;
 align-self: flex-end;

 @media (min-width: 667px) {
   margin: 50px;
   align-self: center;
  }
`

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
`
export const Icons = styled.a`
  margin: 40px 0 60px 0;
  font-size: 22px;
  color: var(--icons);
  padding: 0 9px;
  text-decoration: none;

    &:hover {
      color: var(--Hover);
    }
`

// ProfilePicture
const BgShape = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 140px;
  background-color: var(--skills);
  border-radius: 50% 50% 0 0;
  padding-bottom: 24px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 140px;
  height: 150px;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.5, 2.5, 0.5, 0.1);

  &:hover {
    transform: scale(1.10);
  }
`;

export const ProfileImageHover = ({ src, alt }) => {
  return (
    <BgShape>
      <ImageContainer>
        <ProfileImg src={src} alt={alt} />
      </ImageContainer>
    </BgShape>
  );
};
