import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectAuthMessage = createSelector(
  selectAuthState,
  (state) => state.message
);

export const selectEmailExists = createSelector(
  selectAuthState,
  (state) => state.emailExists
);

export const selectProfile = createSelector(
  selectAuthState,
  (state) => state.profile
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (state) => state.accessToken
);