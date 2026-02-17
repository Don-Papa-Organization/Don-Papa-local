import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import * as AuthActions from '../../../domain/auth/state/auth.actions';
import { selectAuthError, selectAuthLoading, selectIsAuthenticated, selectUser } from '../../../domain/auth/state/auth.selectors';
import { TipoUsuario } from '../../../types/tipo.usuario';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit, OnDestroy {
  email = '';
  password = '';
  loading$: any;
  error$: any;
  successMessage = '';
  private successTimeoutId: ReturnType<typeof setTimeout> | undefined;
  
  private destroy$ = new Subject<void>();
  
  constructor(private store: Store, private router: Router) {
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  ngOnInit(): void {
    combineLatest([
      this.store.select(selectIsAuthenticated),
      this.store.select(selectUser)
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([isAuthenticated, user]) => {
        if (!isAuthenticated || !user) {
          return;
        }

        this.successMessage = 'Inicio de sesión exitoso.';
        if (this.successTimeoutId) {
          clearTimeout(this.successTimeoutId);
        }
        this.successTimeoutId = setTimeout(() => {
          this.navigateByRole(user.tipoUsuario);
        }, 600);

        return;
      });
  }

  ngOnDestroy(): void {
    if (this.successTimeoutId) {
      clearTimeout(this.successTimeoutId);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  submit(form: NgForm): void {
    if (form.invalid || !this.email || !this.password) {
      return;
    }

    this.store.dispatch(
      AuthActions.login({
        payload: {
          correo: this.email.trim(),
          contrasena: this.password
        }
      })
    );
  }

  private navigateByRole(tipoUsuario: TipoUsuario): void {
    switch (tipoUsuario) {
      case TipoUsuario.administrador:
        this.router.navigate(['/admin']);
        break;
      case TipoUsuario.empleado:
        this.router.navigate(['/employee']);
        break;
      case TipoUsuario.cliente:
      default:
        this.router.navigate(['/client']);
        break;
    }
  }

}
