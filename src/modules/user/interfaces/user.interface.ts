export interface UserInfo {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface User extends UserInfo {
  password: string;
}
