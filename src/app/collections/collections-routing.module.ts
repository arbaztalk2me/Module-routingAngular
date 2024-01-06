import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponentComponent } from './collection-home-component/collection-home-component.component';

const routes: Routes = [
  {path:"collections",component:CollectionHomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
