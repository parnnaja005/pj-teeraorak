import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schoolp1Page } from './schoolp1.page';

const routes: Routes = [
  {
    path: '',
    component: Schoolp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Schoolp1PageRoutingModule {}
