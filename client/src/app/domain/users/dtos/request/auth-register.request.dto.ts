import { TipoUsuario } from "../../../../types/tipo.usuario";

export interface AuthRegisterRequestDto {
  correo: string;
  contrasena: string;
  tipoUsuario?: TipoUsuario;
}