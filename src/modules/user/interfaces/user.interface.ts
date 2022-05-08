export interface CreateUser {
  name: string;
  surname: string;
  email: string;
  username: string;
}

export interface CreatedUser extends CreateUser {
  id: number;
}

export interface UpdateUser extends Partial<CreateUser> {
  id: number;
  password: string;
}

export interface MockUser extends CreateUser {
  id: number;
  password: string;
}
