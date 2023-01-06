import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Route[] = [{path:"", component: SecondComponent}];

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SecondModule { }
