import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

const routes: Routes = [
    {path: '' , redirectTo : '/home' , pathMatch: 'full' } ,
    {path: 'home', component: HomeComponent},
    {path: 'detalles', component: DetallesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
