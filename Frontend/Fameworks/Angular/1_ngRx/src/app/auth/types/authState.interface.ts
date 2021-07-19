import { UserInterface } from '../../shared/types/user.interface'
import { RequestErrorsInterface } from './RequestErrors.interface'

export interface AuthStateInterface {
  loading: boolean
  user: UserInterface | null
  isLoggedIn: boolean | null
  validationErrors: RequestErrorsInterface | null
}
