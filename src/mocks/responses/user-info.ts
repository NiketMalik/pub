import { UserInfo } from '@/api/types/user-info';
import { ApiResponse } from '@/api/types/responses';

export const userInfo: ApiResponse<UserInfo> = {
  ok: true,
  data: {
    username: 'unicorn1',
    email: 'unicorn@gmail.com',
    knownTech: [],
    interestedTech: [],
  },
};
