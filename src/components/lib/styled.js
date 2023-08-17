
import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background: var(--background);
padding: 60px 20px 10px 20px;

@media (min-width: 667px) {
    align-items: center;
  }
`

export const ContainerRow = styled.div`
display: flex;
justify-content: left;
background: var(--background);
padding: 0 0 0 10px;
`

export const ContainerWrap = styled.div`
display: flex;
flex-wrap: wrap;
background: var(--background);
padding: 0 0 40px 10px;
`

export const Name = styled.h3`
  font-size: 20px;
  color: var(--greenHead);
  font-weight: 700;
  margin: 0px 0 3px 0;
`
export const Title = styled.h2`
  font-size: 30px;
  color: var(--fontColor);
  font-weight: 700;
  margin: 0;
`
export const TitleSkill = styled.h4`
  font-size: 18px;
  color: var(--fontColormain);
  font-weight: 400;
  letter-spacing: 0cap.5;
  margin: 3px 0 0 0;
`