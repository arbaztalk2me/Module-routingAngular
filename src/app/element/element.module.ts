import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponentComponent } from './element-home-component/element-home-component.component';


@NgModule({
  declarations: [
    ElementHomeComponentComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule
  ]
})
export class ElementModule { }
