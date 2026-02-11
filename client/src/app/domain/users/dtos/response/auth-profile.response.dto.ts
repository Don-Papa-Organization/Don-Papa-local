import { TipoUsuario } from "../../../../types/tipo.usuario";

export interface AuthProfileResponseDto {
  id: number;
  correo: string;
  tipoUsuario: TipoUsuario;
  activo: boolean;
}