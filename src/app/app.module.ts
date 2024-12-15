import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Query1Component } from './query1/query1.component';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';
import { Query4Component } from './query4/query4.component';
import { Query5Component } from './query5/query5.component';
import { Query6Component } from './query6/query6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    Query1Component,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
