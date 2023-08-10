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
  font-family: Josefin Sans;
  font-weight: 300;

  @media (min-width: 668px) and (max-width: 1023px) {
      display: none;
    }

   @media (min-width: 1024px) {
    font-size: 90px;
    margin: 80px 0 0 48px;
   }
`

const LeColor = keyframes`
  0% { background-color: var(--tech); }
  25% { background-color: var(--mywords); }
  50% { background-color: var(--skills); }
  75% { background-color: var(--blueHead); }
  100% { background-color: var(--codeMore); }
`;

export const Blob = styled.div`
  background-color: var(--tech);
  background-size: cover;
  background-position: center center;
  height: 250px;
  width: 250px;
  animation: ${LeColor} 20s ease-in-out infinite, animate 20s ease-in-out infinite;
  transition: all 1s ease-in-out;
  
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
    animation: ${LeColor} 30s linear infinite;
    justify-content: center;

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
padding: 100px 20px 10px 20px;

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
    align-items: center;
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
  margin: 40px 0 60px 0;
  font-size: 22px;
  color: var(--icons);
  padding: 0 9px;
  text-decoration: none;

    &:hover {
      color: var(--Hover);
    }
`