import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponentComponent } from './element-home-component/element-home-component.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ElementHomeComponentComponent,
    PlaceholderComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule
  ]
})
export class ElementModule { }
