import { AuthStateInterface } from '../types/authState.interface'
import { ActionCreator, createReducer, on } from '@ngrx/store'
import {
  registerAction,
  registerSuccessAction,
} from './actions/register.action'

const initialState: AuthStateInterface = {
  loading: false,
  isLoggedIn: null,
  user: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      isLoggedIn: true,
      user: action.user,
    })
  )
)
export function reducers(state: AuthStateInterface, action: ActionCreator) {
  return authReducer(state, action)
}
