import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import * as AuthActions from "../../../domain/auth/state/auth.actions";
import {
  selectAuthError,
  selectAuthLoading,
  selectAuthMessage,
  selectProfile,
  selectUser
} from "../../../domain/auth/state/auth.selectors";
import { NgForm } from "@angular/forms";
import { TipoUsuario } from "../../../types/tipo.usuario";

@Component({
  selector: "app-profile",
  standalone: false,
  templateUrl: "./profile.html",
  styleUrl: "./profile.scss"
})
export class Profile implements OnInit, OnDestroy {
  nombre = "";
  telefono = "";
  direccion = "";
  documento = "";

  contrasenaActual = "";
  nuevaContrasena = "";
  confirmarContrasena = "";
  passwordMismatch = false;

  loading$;
  error$;
  message$;
  user$;
  profile$;

  tipoUsuario?: TipoUsuario;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
    this.message$ = this.store.select(selectAuthMessage);
    this.user$ = this.store.select(selectUser);
    this.profile$ = this.store.select(selectProfile);
  }

  ngOnInit(): void {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.tipoUsuario = user?.tipoUsuario;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  saveProfile(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const payload: any = {};

    if (this.nombre?.trim()) {
      payload.nombre = this.nombre.trim();
    }
    if (this.telefono?.trim()) {
      payload.telefono = this.telefono.trim();
    }
    if (this.direccion?.trim()) {
      payload.direccion = this.direccion.trim();
    }
    if (this.documento?.trim()) {
      payload.documento = this.documento.trim();
    }

    if (Object.keys(payload).length === 0) {
      return;
    }

    this.store.dispatch(AuthActions.updateProfile({ payload }));
  }

  changePassword(form: NgForm): void {
    this.passwordMismatch = this.nuevaContrasena !== this.confirmarContrasena;

    if (form.invalid || this.passwordMismatch) {
      return;
    }

    this.store.dispatch(
      AuthActions.changePassword({
        payload: {
          contrasenaActual: this.contrasenaActual,
          nuevaContrasena: this.nuevaContrasena,
          confirmarContrasena: this.confirmarContrasena
        }
      })
    );
  }
}
