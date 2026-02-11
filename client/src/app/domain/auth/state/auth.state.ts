import { Usuario } from "../../users/models/usuario.model";

export interface AuthState {
  user: Usuario | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
  accessToken?: string;
}