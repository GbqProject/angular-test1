import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { Route, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';


const routes: Route[] = [{ path: "", component: FirstComponent }];

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
})
export class FirstModule { }
