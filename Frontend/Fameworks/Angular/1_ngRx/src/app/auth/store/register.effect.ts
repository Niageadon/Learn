import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import { catchError, map, switchMap } from 'rxjs/internal/operators'
import { AuthService } from '../services/auth.service'
import { of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((user) => registerSuccessAction({ user: user })),
          catchError((reqError: HttpErrorResponse) => {
            const { errors } = reqError.error
            return of(registerFailureAction({ errors }))
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
