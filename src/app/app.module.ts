import { NgModule } from '@angular/core';
import { BrowserModule/*, provideClientHydration */} from '@angular/platform-browser';

//el import de app routing module para que aparezca la parte dinamica
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    //Aquí se ponen todos los componentes 
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//para la parte dinamica
    RouterOutlet
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
