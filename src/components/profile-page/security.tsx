import React from 'react';
import { FormInput, FormLabel } from '@components/shared/form';

export const Security = () => {
  return (
    <div>
      <FormLabel htmlFor="current-password">Current password</FormLabel>
      <FormInput type="password" name="current-password" value="password123" />
      <br />

      <FormLabel htmlFor="new-password">New password</FormLabel>
      <FormInput
        type="password"
        name="current-password"
        value="password123456"
      />
      <br />

      <FormLabel htmlFor="confirm-password">Confirm password</FormLabel>
      <FormInput
        type="password"
        name="current-password"
        value="password123456"
      />
    </div>
  );
};
