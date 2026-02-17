import { CanActivateFn, Router, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, filter, map, switchMap, take } from "rxjs";
import { selectAuthLoading, selectIsAuthenticated, selectUser } from "../../domain/auth/state/auth.selectors";
import { TipoUsuario } from "../../types/tipo.usuario";
import * as AuthActions from "../../domain/auth/state/auth.actions";

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
	const store = inject(Store);
	const router = inject(Router);

	const roles = (route.data?.["roles"] as TipoUsuario[] | undefined) ?? [];

	return combineLatest([
		store.select(selectAuthLoading),
		store.select(selectIsAuthenticated)
	]).pipe(
		take(1),
		switchMap(([loading, isAuthenticated]) => {
			if (!loading && !isAuthenticated) {
				store.dispatch(AuthActions.loadProfile());
			}

			return combineLatest([
				store.select(selectAuthLoading),
				store.select(selectIsAuthenticated),
				store.select(selectUser)
			]).pipe(
				filter(([currentLoading]) => !currentLoading),
				take(1),
				map(([, isAuthenticated, user]) => {
					if (!isAuthenticated || !user) {
						router.navigate(["/auth/login"]);
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
		})
	);
};
