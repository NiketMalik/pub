import { signUpResponse } from './responses/signup-response';
import { signInResponse } from './responses/signin-response';
import { SignUp } from '@/api/types/sign-up';
import { SignIn } from '@/api/types/sign-in';
import { ApiResponse, ErrorResponse } from '@/api/types/responses';
import { JwtToken } from '@/api/types/jwt-token';

export class MockAuthService {
  public async signIn(
    signIn: SignIn,
  ): Promise<ApiResponse<JwtToken | ErrorResponse>> {
    return signInResponse;
  }

  public async signUp(signUp: SignUp) {
    return signUpResponse;
  }
}
