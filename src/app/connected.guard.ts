import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ChatHandlerService } from './chat-handler.service'

@Injectable()
export class ConnectedGuard implements CanActivate {

  constructor(private chatService: ChatHandlerService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.chatService.connected().map(connected => {
       if(!connected) {
         this.router.navigate(["/"])
       }
       return connected
     })
  }
}
