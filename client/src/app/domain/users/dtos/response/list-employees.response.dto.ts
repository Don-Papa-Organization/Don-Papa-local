export interface EmpleadoListItemDto {
  idUsuario: number;
  nombre: string;
  documento: string;
  telefono?: string;
  cargo: string;
  correo?: string;
  activo?: boolean;
}

export type ListEmployeesResponseDto = EmpleadoListItemDto[];