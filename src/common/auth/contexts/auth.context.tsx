import {ReactNode, createContext, useState} from 'react';
import {UserInfo, UserLogin} from '../models';

export interface IAuthContext {
  userInfo?: UserInfo;
  jwt?: string;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  onLogin: (userLogin: UserLogin) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  userInfo: undefined,
  jwt: undefined,
  isLoggedIn: false,
  isLoggingIn: false,
  onLogin: () => null,
  onLogout: () => null,
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [jwt, setJwt] = useState<string>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
};
