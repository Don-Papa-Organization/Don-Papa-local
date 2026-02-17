export interface AuthResetPasswordRequestDto {
  token: string;
  nuevaContrasena: string;
  confirmarContrasena: string;
}
