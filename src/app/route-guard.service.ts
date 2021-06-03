import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
   /* let snackTypeId = route.url[1].path;
    if(snackTypeId == 2){
      alert('Not available for guest users!');
      return false;
    }*/
    return true;
  }
}
