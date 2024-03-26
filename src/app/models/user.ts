export interface UserForm {
  firstname:string;
  lastname:string;
  password:string;
  email:string;
  role:string;
}

export interface loginForm{

  email:string;
  password:string;
}

export interface AuthDTO {
  id: string;
  email:string;
  firstname:string;
  token:string;
  roles:string;
}
