import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-school',
    loadChildren: () => import('./add-school/add-school.module').then( m => m.AddSchoolPageModule)
  },

  {
    path: 'schoolp1/:sendid',
    loadChildren: () => import('./schoolp1/schoolp1.module').then( m => m.Schoolp1PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
