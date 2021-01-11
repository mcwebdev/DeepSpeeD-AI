import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Injectable()
export class LoadingGuard implements CanActivate {

  private loader$ = new Subject<boolean>();
  public loader = false;

  constructor() {
    this.loader$.pipe(debounceTime(1000)).subscribe(loader => this.loader = loader);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loader$.next(true);

    // Returning an Observable for async checks
    return new Observable<boolean>(obs => {
      // Sample 2 second async request
      setTimeout(() => {
        this.loader$.next(false);
        obs.next(true);
        obs.complete();
      }, 5000);
    });

  }
}
