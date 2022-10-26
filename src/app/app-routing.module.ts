import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from "./core/services/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./views/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'protected',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/protected/protected.module').then(m => m.ProtectedModule)
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
