import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast, ToastType, UiToastService } from './ui-toast.service';

@Component({
  selector: 'app-ui-toast',
  standalone: false,
  templateUrl: './ui-toast.html',
  styleUrl: './ui-toast.scss'
})
export class UiToast implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  saliendoIds = new Set<string>();
  pausadosIds = new Set<string>();

  readonly iconos: Record<ToastType, string> = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  private subscription!: Subscription;
  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  constructor(@Inject(UiToastService) private toastService: UiToastService) { }

  ngOnInit(): void {
    this.subscription = this.toastService.toasts$.subscribe(toasts => {
      // Detectar toasts nuevos y arrancar su temporizador
      toasts.forEach(t => {
        if (!this.timers.has(t.id) && !this.toasts.find(e => e.id === t.id)) {
          this.iniciarTimer(t);
        }
      });
      this.toasts = toasts;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.timers.forEach(t => clearTimeout(t));
  }

  private iniciarTimer(toast: Toast): void {
    const timer = setTimeout(() => this.cerrar(toast.id), toast.duracion);
    this.timers.set(toast.id, timer);
  }

  cerrar(id: string): void {
    this.saliendoIds.add(id);
    // Esperar a que termine la animación de salida (300ms) antes de remover
    setTimeout(() => {
      this.saliendoIds.delete(id);
      this.toastService.cerrar(id);
      this.timers.delete(id);
    }, 300);
  }

  pausar(id: string): void {
    this.pausadosIds.add(id);
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
  }

  reanudar(id: string): void {
    this.pausadosIds.delete(id);
    const toast = this.toasts.find(t => t.id === id);
    if (toast) {
      // Reanudar con la duración original restante (simplificado: reinicia el timer)
      this.iniciarTimer(toast);
    }
  }
}
