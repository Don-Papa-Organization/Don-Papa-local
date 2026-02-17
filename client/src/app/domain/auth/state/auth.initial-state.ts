import { AuthState } from "./auth.state";

export const initialAuthState: AuthState = {
  user: null,
  profile: undefined,
  isAuthenticated: false,
  loading: false,
  accessToken: undefined,
  emailExists: undefined,
  message: undefined
};