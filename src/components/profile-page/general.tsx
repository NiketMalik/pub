import React from 'react';
import { FormInput, FormLabel } from '@components/shared/form';

export const General = () => {
  return (
    <div>
      <FormLabel htmlFor="email-profile">Email</FormLabel>
      <FormInput type="email" name="email" value="unicorn@gmail.com" />
    </div>
  );
};
