import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Modules } from '../../shared/emuns/modules.enum'
import { AuthStateInterface } from '../types/authState.interface'
import { AppStateInterface } from '../../shared/types/appState.interface'
import { of } from 'rxjs'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>(Modules.AUTH)

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.loading
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.validationErrors
)
