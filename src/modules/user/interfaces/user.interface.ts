export interface UserInfo {
  name: string;
  surname: string;
  email: string;
}

export interface User extends UserInfo {
  id: number;
  password: string;
}
