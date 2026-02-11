import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.initial-state";
import * as AuthActions from "./auth.actions";

export const authReducer = createReducer(
  initialAuthState,

  on(
    AuthActions.login,
    AuthActions.register,
    AuthActions.verifyEmail,
    AuthActions.resendVerification,
    AuthActions.refreshToken,
    AuthActions.loadProfile,
    AuthActions.checkEmail,
    AuthActions.logout,
    (state) => ({
      ...state,
      loading: true,
      error: undefined
    })
  ),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    loading: false
  })),

  on(AuthActions.loadProfileSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    loading: false
  })),

  on(AuthActions.refreshTokenSuccess, (state, { accessToken }) => ({
    ...state,
    accessToken,
    loading: false
  })),

  on(
    AuthActions.registerSuccess,
    AuthActions.verifyEmailSuccess,
    AuthActions.resendVerificationSuccess,
    AuthActions.checkEmailSuccess,
    (state) => ({
      ...state,
      loading: false
    })
  ),

  on(AuthActions.logoutSuccess, () => ({
    ...initialAuthState
  })),

  on(
    AuthActions.loginFailure,
    AuthActions.registerFailure,
    AuthActions.verifyEmailFailure,
    AuthActions.resendVerificationFailure,
    AuthActions.refreshTokenFailure,
    AuthActions.loadProfileFailure,
    AuthActions.checkEmailFailure,
    AuthActions.logoutFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  )
);