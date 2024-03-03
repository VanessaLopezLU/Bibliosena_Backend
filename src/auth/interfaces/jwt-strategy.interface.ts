import { Rol } from "src/roles/entities/Roles.entity";

export interface JwtPayload {
  readonly cedula: string;
  readonly contrasena: string;
  readonly id_rol: string;
}
