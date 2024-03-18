export interface UserForm {

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

  email:string;
  firstname:string;
  token:string;
}
