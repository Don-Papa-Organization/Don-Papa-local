import { TipoUsuario } from "../../../../types/tipo.usuario";

export interface AuthLoginResponseDto {
  message: string;
  user: {
    id: number;
    correo: string;
    tipoUsuario: TipoUsuario;
    activo: boolean;
  };
}