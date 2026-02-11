export interface GetEmployeeResponseDto {
  id: number;
  nombre: string;
  documento: string;
  telefono?: string;
  cargo: string;
  correo?: string;
  activo?: boolean;
}