import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
