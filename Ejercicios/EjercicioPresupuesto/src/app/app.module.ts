import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoGastosComponent } from './listado-gastos/listado-gastos.component';
import { ListadoIngresosComponent } from './listado-ingresos/listado-ingresos.component';
import { ListadoComponentComponent } from './listado-component/listado-component.component';
import { GastoServices } from './services/gasto.service';
import { IngresoServices } from './services/ingreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    ListadoGastosComponent,
    ListadoIngresosComponent,
    ListadoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GastoServices,
    IngresoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
