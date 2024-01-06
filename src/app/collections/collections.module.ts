import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponentComponent } from './collection-home-component/collection-home-component.component';


@NgModule({
  declarations: [
    CollectionHomeComponentComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports:[CollectionHomeComponentComponent]
})
export class CollectionsModule { }
