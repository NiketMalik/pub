import * as React from 'react';

import CtaButton from './cta-button';
import styled from '@styled-components';

const Wrapper = styled.section`
  align-items: center;
  background: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.baseinvert};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.boxes.padding.section.medium};

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.medium}) {
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.small}) {
    padding: ${({ theme }) => theme.boxes.padding.section.small};
  }
`;

const Text = styled.div`
  flex: 0 0 40%;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.small}) {
    flex: 0 0 100%;
  }
`;

const TextHeading = styled.h2`
  color: ${({ theme }) => theme.colors.baseinvert};
  margin: 0;
`;

const TextSubHeading = styled.p`
  font-size: 1.1em;
  margin: 1.5625em 0 0;
  text-align: start;

  @media screen and (max-width: ${({ theme }) => theme.sizes.width.medium}) {
    margin: 1.5625em 0;
  }
`;

const Form = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.sizes.width.medium}) {
    width: 100%;
  }
`;

/** Sign up contains the last sales pitch and a call-to-action button. */
const Signup: React.FC = () => (
  <Wrapper>
    <Text>
      <TextHeading>Apply to join our Slack group</TextHeading>

      <TextSubHeading>
        It only takes a few minutes to apply. We will consider your application
        to join the slack team. If you are accepted, expect an invite in less
        than 24 hours.
      </TextSubHeading>
    </Text>

    <Form>
      <CtaButton variant="secondary" />
    </Form>
  </Wrapper>
);

export default Signup;
