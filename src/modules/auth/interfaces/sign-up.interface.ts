export interface SignUp {
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  username: string;
}
