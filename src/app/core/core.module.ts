import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { CallbackComponent } from './callback/callback.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
