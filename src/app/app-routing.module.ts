import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [ AuthGuardService ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
