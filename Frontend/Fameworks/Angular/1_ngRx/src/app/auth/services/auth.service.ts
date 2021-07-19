import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from '../../shared/types/registerRequest.interface'
import { Observable } from 'rxjs'
import { UserInterface } from '../../shared/types/user.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { AuthResponseInterface } from '../types/authResponse.interface'
import { map } from 'rxjs/internal/operators'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((resp) => resp.user))
  }
}
