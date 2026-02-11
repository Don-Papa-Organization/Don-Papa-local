import { TipoUsuario } from "../../../../types/tipo.usuario";

export interface CreateEmployeeResponseDto {
  id: number;
  idUsuario: number;
  nombre: string;
  documento: string;
  telefono?: string;
  cargo: string;
  usuario: {
    correo: string;
    tipoUsuario: TipoUsuario;
    activo: boolean;
  };
  message: string;
}