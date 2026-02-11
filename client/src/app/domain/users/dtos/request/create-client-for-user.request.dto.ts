export interface CreateClientForUserRequestDto {
  idUsuario: number;
  direccion: string;
  nombre: string;
  telefono: string;
  correo?: string;
  activo?: boolean;
}