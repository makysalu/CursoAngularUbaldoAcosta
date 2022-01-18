import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { ListadoIngresoComponent } from './listado-ingreso/listado-ingreso.component';
import { ListadoGastoComponent } from './listado-gasto/listado-gasto.component';
import { IngresoServices } from './services/ingreso.service';
import { GastoServices } from './services/gasto.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    ListadoComponent,
    ListadoIngresoComponent,
    ListadoGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IngresoServices,
    GastoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
