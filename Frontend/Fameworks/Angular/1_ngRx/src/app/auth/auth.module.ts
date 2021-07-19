import { Component, NgModule, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthComponent } from './auth.component'
import { RouterModule } from '@angular/router'
import { AuthRoutingModule } from './auth-routing.module'
import { RegisterComponent } from './components/register/register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { Modules } from '../shared/emuns/modules.enum'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/register.effect'

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    RouterModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(Modules.AUTH, reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
