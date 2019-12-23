import { Link, navigate } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import {
  FormLabel,
  FormInput,
  LinkWrapper,
  ButtonWrapper,
} from '@components/shared/form';
import { Form } from '@components/shared/form';
import { useState } from 'react';
import ServiceResolver from '@/api/service-resolver';
import { ApiResponse, ErrorResponse } from '@/api/types/responses';
import { UserValidation } from '@/api/types/user-validation';
import { JwtToken } from '@/api/types/jwt-token';
import { SessionStorageHelper } from '@/helpers';
import { ApiButton } from '../buttons/api-button';
import { ErrorMessage, Ribbon, CloseButton } from '..';
import 'validator';
import validator from 'validator';
import { Username } from '@/api/types/username';
import { UsernameCheck } from '../messages';

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

interface InputValue {
  val: string;
  required: boolean;
}

interface FormInput {
  [key: string]: InputValue;
}

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const [message, setMessage] = useState<string | UserValidation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usernameAvailablity, setUsernameAvailability] = useState<
    UserValidation
  >({ valid: false, reason: '' });

  const checkUsername = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const api = ServiceResolver.apiResolver();
    const { value } = e.target;

    if (value) {
      setIsLoading(true);

      const username: Username = {
        username: value,
      };

      try {
        const response = (await api.validateUsername(username)) as ApiResponse<
          UserValidation | ErrorResponse
        >;
        if (!response.ok) setMessage(response.data as UserValidation);
        setIsLoading(false);
        setUsernameAvailability(response.data as UserValidation);
      } catch (error) {
        setMessage('Failed to validate username');
      }
    } else {
      setUsernameAvailability({ valid: false, reason: '' });
    }
  };

  // TODO: change `any`
  const validationRules: any = {
    email: [
      { rule: () => !validator.isEmpty(email), errorMessage: 'Required' },
      { rule: () => validator.isEmail(email), errorMessage: 'Invalid email' },
    ],
    username: [
      { rule: () => !validator.isEmpty(username), errorMessage: 'Required' },
      // {
      //   rule: () => checkUsername(username),
      //   errorMessage: 'Username not available',
      // },
    ],
    password: [
      { rule: () => !validator.isEmpty(password), errorMessage: 'Required' },
      // {
      //   rule: () => validator.matches(password, /[a-zA-Z0-9_-\.]{6,}/),
      //   errorMessage:
      //     'Password must be 6 characters or more, containing only alphanumeric characters, _, -, and .',
      // },
    ],
    confirmPassword: [
      {
        rule: () => !validator.isEmpty(confirmPassword),
        errorMessage: 'Required',
      },
      {
        rule: () => validator.equals(confirmPassword, password),
        errorMessage: 'Passwords do not match',
      },
    ],
  };

  const [formErrors, setFormErrors]: any = React.useState<object>({});

  const validateField = (name: string) => {
    const rules = validationRules[name];
    const errors = { ...formErrors };

    for (const rule of rules) {
      const isValid = rule.rule();

      if (!isValid) {
        errors[name] = rule.errorMessage;
        setFormErrors({ ...errors });
        return;
      } else {
        delete errors[name];
        setFormErrors({ ...errors });
      }
    }
  };

  const isFormValid = (): boolean => {
    validateField('email');
    validateField('username');
    validateField('password');
    validateField('confirmPassword');

    return Object.keys(formErrors).length > 0;
  };

  const handleClick = async () => {
    const auth = ServiceResolver.authResolver();

    if (!isFormValid()) return;

    try {
      const locale =
        typeof window.navigator !== 'undefined'
          ? window.navigator.language
          : 'en-US';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const response = (await auth.signUp({
        username,
        email,
        password,
        confirmPassword,
        locale,
        timezone,
      })) as ApiResponse<JwtToken | ErrorResponse>;
      if (response.ok) {
        SessionStorageHelper.storeJwt(response.data as JwtToken);
        navigate('/app/projects/');
      } else {
        setMessage((response.data as ErrorResponse).message);
      }
    } catch (err) {
      setMessage('Failed to sign up. Please try again');
    }
  };

  return (
    <Wrapper>
      <Form heading={`Sign Up`}>
        {message !== null && (
          <Ribbon type="danger">
            {message}
            <CloseButton onClick={() => setMessage(null)}>&#10006;</CloseButton>
          </Ribbon>
        )}
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          name="email"
          type="email"
          placeholder="unicorn@projectunicorn.net"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={() => validateField('email')}
          hasError={formErrors.hasOwnProperty('email')}
        />
        {formErrors.hasOwnProperty('email') && (
          <ErrorMessage value={formErrors['email']} />
        )}
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormInput
          name="username"
          type="text"
          placeholder="unicorn21"
          onChange={(e) => {
            setUsername(e.target.value);
            checkUsername(e);
          }}
          onBlur={() => validateField('username')}
          hasError={formErrors.hasOwnProperty('username')}
        />
        <UsernameCheck isValid={usernameAvailablity.valid}>
          {isLoading ? 'Checking availability...' : usernameAvailablity.reason}
        </UsernameCheck>
        {formErrors.hasOwnProperty('username') && (
          <ErrorMessage value={formErrors['username']} />
        )}
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          name="password"
          type="password"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validateField('password')}
          hasError={formErrors.hasOwnProperty('password')}
        />
        {formErrors.hasOwnProperty('password') && (
          <ErrorMessage value={formErrors['password']} />
        )}
        <FormLabel htmlFor="password">Confirm Password</FormLabel>
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={() => validateField('confirmPassword')}
          hasError={formErrors.hasOwnProperty('confirmPassword')}
        />
        {formErrors.hasOwnProperty('confirmPassword') && (
          <ErrorMessage value={formErrors['confirmPassword']} />
        )}
        <LinkWrapper>
          <Link to="/signin">Already a member? Sign In</Link>
        </LinkWrapper>
        <ButtonWrapper>
          <ApiButton handleClick={handleClick} statusText="Signing Up...">
            Sign Up
          </ApiButton>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};
