import { TipoUsuario } from "../../../types/tipo.usuario";

export interface Usuario {
    idUsuario: number,
    correo: string,
    tipoUsuario: TipoUsuario,
    activo: boolean,
}