export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  username: string;
  password: string;
  email: string;
}

export interface UserLogout {
  refreshToken: string;
}

export interface UserRefreshToken {
  refreshToken: string;
}

export interface UserModel {
  user: {
    score: number;
    role: string;
    isEmailVerified: boolean;
    avatar: string;
    username: string;
    email: string;
    id: string;
  };
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
}

//Admin manage User
export interface UserCreate {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface UserUpdate {
  avatar: string;
}

export interface User {
  user: {
    score: number;
    role: string;
    isEmailVerified: boolean;
    avatar: string;
    username: string;
    email: string;
    id: string;
  };
}
