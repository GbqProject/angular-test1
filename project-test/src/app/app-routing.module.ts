import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first-component',
    loadChildren: () => import('src/app/modules/first/first.module').then(m => m.FirstModule)
  }, {
    path: 'second-component',
    loadChildren: () => import('src/app/modules/second/second.module').then(m => m.SecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
