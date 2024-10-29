import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const routes: Routes = [//todo lo que viene despues del 
  //Se añaden las rutas al componente dinamico
  {path:'', component:PaginaInicialComponent}//cuandola ruta este en blanco por default poner pag inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
