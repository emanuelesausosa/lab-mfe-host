import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabMfeOneComponent } from './lab-mfe-one.component';
import { TtMfeMfeOneModule } from 'tt-mfe-mfe-one';
import {LabMfeOneRoutingModule} from "./lab-mfe-one-routing.module";



@NgModule({
  declarations: [
    LabMfeOneComponent
  ],
  imports: [
    CommonModule,
    TtMfeMfeOneModule,
    LabMfeOneRoutingModule
  ]
})
export class LabMfeOneModule { }
