import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes.enum'
import {
  RegisterRequestInterface,
  RegisterResponseInterface,
} from '../../../shared/types/registerRequest.interface'
import { RequestErrorsInterface } from '../../types/RequestErrors.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<RegisterResponseInterface>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: RequestErrorsInterface }>()
)
