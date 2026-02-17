import { Usuario } from "../../users/models/usuario.model";
import { UserProfile } from "../../../types/user-profile.type";

export interface AuthState {
  user: Usuario | null;
  profile?: UserProfile;
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
  accessToken?: string;
  emailExists?: boolean;
  message?: string;
}