import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"; /* HttpClientModule responsavel por integrar API (simular o Insominia) */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
