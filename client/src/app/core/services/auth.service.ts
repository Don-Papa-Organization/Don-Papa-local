import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UsersApi } from "../../services/apis/users.api";
import { Usuario } from "../../domain/users/models/usuario.model";
import {
  AuthLoginRequest,
  AuthRegisterRequest,
  AuthResendVerificationRequest,
  AuthVerifyEmailRequest,
  AuthUpdateProfileRequest,
  AuthChangePasswordRequest,
  AuthForgotPasswordRequest,
  AuthResetPasswordRequest
} from "../../domain/auth/models/auth-requests.model";
import { UserProfile } from "../../types/user-profile.type";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private usersApi: UsersApi) {}

  login(payload: AuthLoginRequest): Observable<Usuario> {
    return this.usersApi.login(payload).pipe(
      map((res) => {
        if (!res.success || !res.data?.user) {
          throw new Error(res.message || "Error de autenticación");
        }

        return {
          idUsuario: res.data.user.id,
          correo: res.data.user.correo,
          tipoUsuario: res.data.user.tipoUsuario,
          activo: res.data.user.activo
        };
      })
    );
  }

  register(payload: AuthRegisterRequest): Observable<string> {
    return this.usersApi.register(payload).pipe(
      map((res) => {
        if (!res.success || !res.data?.message) {
          throw new Error(res.message || "Error al registrar");
        }
        return res.data.message;
      })
    );
  }

  verifyEmail(payload: AuthVerifyEmailRequest): Observable<string> {
    return this.usersApi.verifyEmail(payload).pipe(
      map((res) => {
        if (!res.success || !res.data?.message) {
          throw new Error(res.message || "Error al verificar");
        }
        return res.data.message;
      })
    );
  }

  resendVerification(payload: AuthResendVerificationRequest): Observable<string> {
    return this.usersApi.resendVerification(payload).pipe(
      map((res) => {
        if (!res.success || !res.data?.message) {
          throw new Error(res.message || "Error al reenviar");
        }
        return res.data.message;
      })
    );
  }

  refreshToken(): Observable<string> {
    return this.usersApi.refreshToken().pipe(
      map((res) => {
        const token = res.data?.accessToken;
        if (!res.success || !token) {
          throw new Error(res.message || "Error al refrescar token");
        }
        return token;
      })
    );
  }

  loadProfile(): Observable<Usuario> {
    return this.usersApi.getProfile().pipe(
      map((res) => {
        if (!res.success || !res.data) {
          throw new Error(res.message || "Error al cargar perfil");
        }

        return {
          idUsuario: res.data.id,
          correo: res.data.correo,
          tipoUsuario: res.data.tipoUsuario,
          activo: res.data.activo
        };
      })
    );
  }

  checkEmail(email: string): Observable<boolean> {
    return this.usersApi.checkEmail(email).pipe(
      map((res) => {
        if (!res.success || res.data?.exists === undefined) {
          throw new Error(res.message || "Error al verificar email");
        }
        return res.data.exists;
      })
    );
  }

  logout(): Observable<void> {
    return this.usersApi.logout().pipe(
      map((res) => {
        if (!res.success) {
          throw new Error(res.message || "Error al cerrar sesión");
        }
      })
    );
  }

  updateProfile(payload: AuthUpdateProfileRequest): Observable<UserProfile> {
    return this.usersApi.updateProfile(payload).pipe(
      map((res) => {
        if (!res.success || !res.data) {
          throw new Error(res.message || "Error al actualizar perfil");
        }
        return res.data;
      })
    );
  }

  changePassword(payload: AuthChangePasswordRequest): Observable<string> {
    return this.usersApi.changePassword(payload).pipe(
      map((res) => {
        if (!res.success) {
          throw new Error(res.message || "Error al cambiar contraseña");
        }
        return res.data?.message || res.message || "Contraseña actualizada correctamente";
      })
    );
  }

  forgotPassword(payload: AuthForgotPasswordRequest): Observable<string> {
    return this.usersApi.forgotPassword(payload).pipe(
      map((res) => {
        if (!res.success) {
          throw new Error(res.message || "Error al enviar correo de recuperación");
        }
        return res.data?.message || res.message || "Correo de recuperación enviado";
      })
    );
  }

  resetPassword(payload: AuthResetPasswordRequest): Observable<string> {
    return this.usersApi.resetPassword(payload).pipe(
      map((res) => {
        if (!res.success) {
          throw new Error(res.message || "Error al restablecer contraseña");
        }
        return res.data?.message || res.message || "Contraseña restablecida correctamente";
      })
    );
  }
}