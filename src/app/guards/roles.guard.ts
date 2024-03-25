import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const rolesGuard: CanActivateFn = (route, state) => {


  const router = inject(Router)

  const role = 'admin'
  const userRoleService = inject(UserService);

  if(userRoleService.getUserRole()?.valueOf() != role) {
    router.navigate(['/login'])
    return false
  }else {
    return true
  }

};
