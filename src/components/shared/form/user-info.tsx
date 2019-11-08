import { navigate } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { FormLabel, FormInput, ButtonWrapper } from '@components/shared/form';
import { Form } from '@components/shared/form';
import { useState } from 'react';
import ServiceResolver from '@/api/service-resolver';
import { ApiResponse, ErrorResponse } from '@/api/types/responses';
import { UserValidation } from '@/api/types/user-validation';
import { Button } from '@components/app/shared';
import { FormVal } from '@/utils/form-validation';
import { UserInfo } from '@/api/types/user-info';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.section};

  padding: ${({ theme }) => theme.boxes.padding.section.smallTop};

  @media screen and(max-width: ${({ theme }) => theme.sizes.width.medium}) {
    flex-direction: column;
  }

  @media screen and(max-width: ${({ theme }) => theme.sizes.width.small}) {
    padding: ${({ theme }) => theme.boxes.padding.section.small};
  }
`;

const Error = styled.ul`
  color: ${({ theme }) => theme.colors.alert.danger};
  margin: 0;

  li {
    margin: 0;
  }
`;

export const UserInfoForm: React.FC = () => {
  const validation = new FormVal();

  const [formInputs, setFormInputs] = useState({
    knownTech: { val: [] as string[], required: true },
    interestedTech: { val: [] as string[], required: true },
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [message, setMessage] = useState<string | UserValidation>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const state: any = formInputs;
    state[name].val = value;

    setFormInputs({ ...state });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: any[] = [];

    if (errors.length) return setFormErrors([...errors]);
    setFormErrors([]);

    try {
      const api = ServiceResolver.apiResolver();
      const response = (await api.setUserInfo({
        knownTech: formInputs.knownTech.val,
        interestedTech: formInputs.interestedTech.val,
      })) as ApiResponse<UserInfo | ErrorResponse>;

      if (response.ok) {
        navigate('/app/projects');
      } else {
        setMessage((response.data as ErrorResponse).message);
      }
    } catch (err) {
      // TODO: update logic to read exception from api response
      setMessage('Failed to finish sign up');
    }
  };

  const displayErrorMessages = () => {
    return formErrors.map((err: string) => {
      if (err === 'knownTech') return <li key={err}>Invalid email</li>;
      if (err === 'interestedTech') return <li key={err}>Invalid username</li>;
    });
  };

  return (
    <Wrapper>
      <Form
        heading={`Tell Us a Little More About Yourself`}
        handleSubmit={handleSubmit}
      >
        {formErrors && <Error>{displayErrorMessages()}</Error>}
        {message && <Error>{message}</Error>}
        <FormLabel htmlFor="technologies">Technologies you know</FormLabel>
        <FormInput
          type="text"
          name="knownTech"
          onChange={(e) => handleChange(e)}
          hasError={formErrors.includes('knownTech')}
        />

        <FormLabel htmlFor="technologies">
          Technologies you are interested in working with
        </FormLabel>
        <FormInput
          type="text"
          name="interestedTech"
          onChange={(e) => handleChange(e)}
          hasError={formErrors.includes('interestedTech')}
        />

        <ButtonWrapper>
          <Button active={false}>Sign Up</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};
