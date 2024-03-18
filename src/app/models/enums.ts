export enum Roles {

  admin= "admin",
  employé = "employee"
}


export const RolesMapping:Record<Roles, string> = {
[Roles.admin]: "Admin", [Roles.employé]: "employé"
}
