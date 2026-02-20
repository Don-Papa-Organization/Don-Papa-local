import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
    id: string;
    mensaje: string;
    tipo: ToastType;
    duracion: number;
}

@Injectable({
    providedIn: 'root'
})
export class UiToastService {
    private toastsSubject = new BehaviorSubject<Toast[]>([]);
    toasts$ = this.toastsSubject.asObservable();

    private generarId(): string {
        return Math.random().toString(36).slice(2, 9);
    }

    mostrar(mensaje: string, tipo: ToastType = 'info', duracion: number = 4000): void {
        const toast: Toast = { id: this.generarId(), mensaje, tipo, duracion };
        this.toastsSubject.next([...this.toastsSubject.value, toast]);
    }

    success(mensaje: string, duracion?: number) { this.mostrar(mensaje, 'success', duracion); }
    error(mensaje: string, duracion?: number) { this.mostrar(mensaje, 'error', duracion); }
    warning(mensaje: string, duracion?: number) { this.mostrar(mensaje, 'warning', duracion); }
    info(mensaje: string, duracion?: number) { this.mostrar(mensaje, 'info', duracion); }

    cerrar(id: string): void {
        this.toastsSubject.next(this.toastsSubject.value.filter(t => t.id !== id));
    }
}
