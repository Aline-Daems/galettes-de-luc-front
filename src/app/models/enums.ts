export enum Role {

  admin= "admin",
  employé = "employee"
}


export const RolesMapping:Record<Role, string> = {
 [Role.employé]: "employee", [Role.admin]: "admin",
}
