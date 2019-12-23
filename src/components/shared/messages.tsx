import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  value: string;
}

export const ErrorMessageHtml = styled.span`
  color: red;
  font-size: 14px;
`;

export const SuccessMessageHtml = styled.span`
  color: green;
  font-size: 14px;
`;

export const ErrorMessage: React.FC<MessageProps> = ({ value }) => {
  return <ErrorMessageHtml>{value}</ErrorMessageHtml>;
};

export const SuccessMessage: React.FC<MessageProps> = ({ value }) => {
  return <SuccessMessageHtml>{value}</SuccessMessageHtml>;
};

export const UsernameCheck = styled.small<{ isValid: boolean }>`
  color: ${(props) => !props.isValid && 'red'};
`;
