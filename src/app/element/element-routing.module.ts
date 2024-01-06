import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementHomeComponentComponent } from './element-home-component/element-home-component.component';

const routes: Routes = [
  {path:"element",component:ElementHomeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementRoutingModule { }
