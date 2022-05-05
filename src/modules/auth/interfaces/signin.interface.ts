export interface Credentials {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

export interface GoogleSignInResponse {
  message: string;
  user: any;
}
