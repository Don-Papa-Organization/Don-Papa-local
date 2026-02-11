import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as AuthActions from "./auth.actions";
import { Usuario } from "../../users/models/usuario.model";
import { AuthService } from "../../../core/services/auth.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ payload }) =>
        this.authService.login(payload).pipe(
          map((user: Usuario) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ payload }) =>
        this.authService.register(payload).pipe(
          map((message) => AuthActions.registerSuccess({ message })),
          catchError((error) => of(AuthActions.registerFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verifyEmail),
      switchMap(({ payload }) =>
        this.authService.verifyEmail(payload).pipe(
          map((message) => AuthActions.verifyEmailSuccess({ message })),
          catchError((error) => of(AuthActions.verifyEmailFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  resendVerification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resendVerification),
      switchMap(({ payload }) =>
        this.authService.resendVerification(payload).pipe(
          map((message) => AuthActions.resendVerificationSuccess({ message })),
          catchError((error) => of(AuthActions.resendVerificationFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refreshToken),
      switchMap(() =>
        this.authService.refreshToken().pipe(
          map((accessToken) => AuthActions.refreshTokenSuccess({ accessToken })),
          catchError((error) => of(AuthActions.refreshTokenFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadProfile),
      switchMap(() =>
        this.authService.loadProfile().pipe(
          map((user) => AuthActions.loadProfileSuccess({ user })),
          catchError((error) => of(AuthActions.loadProfileFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  checkEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkEmail),
      switchMap(({ email }) =>
        this.authService.checkEmail(email).pipe(
          map((exists) => AuthActions.checkEmailSuccess({ exists })),
          catchError((error) => of(AuthActions.checkEmailFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({ error: error?.message || "Error inesperado" })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}