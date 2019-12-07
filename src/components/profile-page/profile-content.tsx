import React from 'react';
import styled from 'styled-components';

interface Props {
  heading: string;
  content: string;
}

const Container = styled.div`
  max-width: 900px;
  /* border: 1px solid lightgray; */
  border-left: none;
  flex: 1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
`;

const Heading = styled.h2`
  margin: 0;
  padding: 20px;
`;

const Content = styled.div`
  color: black;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
`;

export const ProfileContent: React.FC<Props> = ({ heading, content }) => {
  return (
    <Container>
      <Header>
        <Heading>{heading}</Heading>
      </Header>
      <Content>{content}</Content>
    </Container>
  );
};
