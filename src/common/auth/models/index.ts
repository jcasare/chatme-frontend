export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Jwt {
  token: string;
}

export interface Credentials extends Jwt {
  user: UserInfo;
}
