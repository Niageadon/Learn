import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StyleDirective } from "./directives/style.directive";
import { IfNotDirective } from "./directives/ifNot.directive";

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfNotDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
