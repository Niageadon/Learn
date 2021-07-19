import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerAction } from '../../store/actions/register.action'
import { Observable } from 'rxjs'
import { isLoadingSelector } from '../../store/selectors'
import { AuthService } from '../../services/auth.service'
import { RegisterRequestInterface } from '../../../shared/types/registerRequest.interface'
import { RequestErrorsInterface } from '../../types/RequestErrors.interface'

@Component({
  selector: 'app-auth',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  loading$!: Observable<boolean | null>
  formErrors$!: Observable<RequestErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.initForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.loading$ = this.store.pipe(select(isLoadingSelector))
  }

  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: '',
    })
  }

  onSubmit(): void {
    console.log(this.form.valid)
    const request: RegisterRequestInterface = { user: this.form.value }
    this.store.dispatch(registerAction({ request }))
  }
}
