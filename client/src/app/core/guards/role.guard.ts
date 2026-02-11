import { CanActivateFn, Router, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, map, of } from "rxjs";
import { selectIsAuthenticated, selectUser } from "../../domain/auth/state/auth.selectors";
import { TipoUsuario } from "../../types/tipo.usuario";

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
	const store = inject(Store);
	const router = inject(Router);

	const roles = (route.data?.["roles"] as TipoUsuario[] | undefined) ?? [];

	return combineLatest([
		store.select(selectIsAuthenticated),
		store.select(selectUser)
	]).pipe(
		map(([isAuthenticated, user]) => {
			if (!isAuthenticated || !user) {
				router.navigate(["/login"]);
				return false;
			}

			if (roles.length === 0) {
				return true;
			}

			const allowed = roles.includes(user.tipoUsuario);
			if (!allowed) {
				router.navigate(["/"]);
			}

			return allowed;
		})
	);
};
