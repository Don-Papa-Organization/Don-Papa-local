import { TipoUsuario } from "./tipo.usuario";

export interface UserProfile {
  id: number;
  correo: string;
  tipoUsuario: TipoUsuario;
  activo: boolean;
  cliente?: {
    nombre?: string;
    telefono?: string;
    direccion?: string;
  };
  empleado?: {
    nombre?: string;
    telefono?: string;
    documento?: string;
    cargo?: string;
  };
}
