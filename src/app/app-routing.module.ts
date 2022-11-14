import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { CuidadosComponent } from './cuidados/cuidados.component';
import { MisPlantasComponent } from './mis-plantas/mis-plantas.component';
import { LoguinComponent } from './loguin/loguin.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';



const routes: Routes =[
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoguinComponent},
  {path:'misPlantas',component:MisPlantasComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'cuidados',component:CuidadosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'recomendaciones',component:RecomendacionesComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},

];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
