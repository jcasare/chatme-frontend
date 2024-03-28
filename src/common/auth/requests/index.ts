import {baseUrl, get, post} from '../../requests';
import {UserLogin, NewUser, UserInfo, Credentials} from '../models';

export const getUsers = async () => {
  const {data: users} = await get<UserInfo>(`${baseUrl}/auth`);
  return users;
};

export const loginUser = async (userLogin: UserLogin) => {
  const {data: userCredentials} = await post<UserInfo>(
    `${baseUrl}/auth/login`,
    userLogin,
  );
  return userCredentials;
};

export const signup = async (newUser: NewUser) => {
  const {data: user} = await post<UserInfo>(
    `${baseUrl}/auth/register`,
    newUser,
  );

  return user;
};
