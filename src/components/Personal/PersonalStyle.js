import styled from 'styled-components/macro';

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

export const ColorSection = styled.div`
    display: none;


    @media (min-width: 668px) and (max-width: 1023px) {
        display: flex;
        background-color: pink;
        height: 300px;
    }

    @media (min-width: 1024px) {
        display: flex;
        width: 50%;
        background-color: pink;
        
    }
`

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 60px 20px 10px 20px;

@media (min-width: 667px) {
    align-items: center;
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