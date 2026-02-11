import { Cliente } from "../../models/cliente.model";
import { TipoUsuario } from "../../../../types/tipo.usuario";

export interface ClienteEnrichedDto extends Cliente {
  tipoUsuario: TipoUsuario;
}

export type GetClientEnrichedResponseDto = ClienteEnrichedDto;