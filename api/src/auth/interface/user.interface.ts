export enum UserRole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  GUEST = 'GUEST',
}
export interface User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}
export interface IAuthenticatedUser {
  user: User;
  token: string;
}
