import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../domain/auth/state/auth.actions';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  constructor(private store: Store){}

  onLogout(): void {
      this.store.dispatch(AuthActions.logout());
    }
}
