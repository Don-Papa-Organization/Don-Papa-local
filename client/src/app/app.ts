import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './domain/auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.loadProfile());
  }
}

