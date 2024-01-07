import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModHomeComponent } from './mod-home/mod-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccoedianComponent } from './accoedian/accoedian.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModHomeComponent,
    ModalComponent,
    AccoedianComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
