import { IUser } from "@/types/user.types";

export interface IUserState {
  email: string;
  isAdmin: boolean;
  user?: IUser | null;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
  error: string | null;
}

export interface IEmailPassword {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
