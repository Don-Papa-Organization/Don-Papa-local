export interface GetEmployeeByDocumentResponseDto {
  id: number;
  nombre: string;
  documento: string;
  telefono?: string;
  cargo: string;
  usuario: {
    correo?: string;
    activo?: boolean;
  };
}