import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})

export class AppComponent implements OnInit{
  title = 'DEEPSPEED AI';
  isAuthenticated: boolean;
  loading = false;
  userEmail: string;
  options;
  faEnvelope = faEnvelope;
  constructor(public oktaAuth: OktaAuthService, private router: Router, private titleService: Title, private metaService: Meta) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  async ngOnInit() {
    this.oktaAuth.isAuthenticated().then((auth) => { this.isAuthenticated = auth });
    const userClaims = await this.oktaAuth.getUser();
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular, Deepspeed AI, Machine Learning Components' },
      { name: 'description', content: 'Machine Learning Suite for Angular' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:image', content: '../assets/ds.jpg' }
    ]);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}
