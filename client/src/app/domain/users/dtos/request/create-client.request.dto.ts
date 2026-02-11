export interface CreateClientRequestDto {
  direccion: string;
  nombre: string;
  telefono: string;
  correo?: string;
  activo?: boolean;
}