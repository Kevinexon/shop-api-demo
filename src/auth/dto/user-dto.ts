export type Role = 'admin';

export class UserDto {
  id: number;
  username: string;
  password: string;
  role: Role[];
}
