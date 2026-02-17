import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { ApiError } from "../../types/api-error.type";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
	const router = inject(Router);

	return next(req).pipe(
		catchError((err) => {
			const isAuthLoginRequest = req.url.includes("/users/auth/login");
			if (err.status === 401 && !isAuthLoginRequest) {
				router.navigate(["/auth/login"]);
			}

			const message =
				err?.error?.message ||
				err?.error?.error ||
				err?.message ||
				"Error inesperado";

			const normalized: ApiError = {
				success: false,
				message,
				timestamp: new Date().toISOString(),
				status: err?.status,
				error: err?.error
			};

			return throwError(() => normalized);
		})
	);
};
