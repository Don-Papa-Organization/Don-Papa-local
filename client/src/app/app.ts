import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AuthActions from './domain/auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url || "/";
    const isAuthRoute = currentUrl.startsWith("/auth");
    const isRootRoute = currentUrl === "/" || currentUrl === "";

    if (!isAuthRoute && !isRootRoute) {
      this.store.dispatch(AuthActions.loadProfile());
    }
  }
}

