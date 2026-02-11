import { TipoUsuario } from "../../../types/tipo.usuario";

export interface AuthLoginRequest {
  correo: string;
  contrasena: string;
}

export interface AuthRegisterRequest {
  correo: string;
  contrasena: string;
  tipoUsuario?: TipoUsuario;
}

export interface AuthVerifyEmailRequest {
  token: string;
}

export interface AuthResendVerificationRequest {
  correo: string;
}
