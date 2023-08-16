import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`;

const GradientOne = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, var(--tech), var(--projects));
`;

export const One = () => {
  return (
    <Container>
      <GradientOne />
    </Container>
  );
};

const GradientTwo = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, var(--projects), var(--skills));
`;

export const Two = () => {
  return (
    <Container>
      <GradientTwo />
    </Container>
  );
};

const GradientThree = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(to bottom, var(--skills), var(--footer));
`;

export const Three = () => {
  return (
    <Container>
      <GradientThree />
    </Container>
  );
};

