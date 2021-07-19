import { UserInterface } from './user.interface'

export interface RegisterRequestInterface {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface RegisterResponseInterface {
  user: UserInterface
}
