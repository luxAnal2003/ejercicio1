import { NgModule } from '@angular/core';
import { BrowserModule/*, provideClientHydration */} from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterOutlet
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
