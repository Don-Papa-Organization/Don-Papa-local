import { AuthState } from "./auth.state";

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  accessToken: undefined
};