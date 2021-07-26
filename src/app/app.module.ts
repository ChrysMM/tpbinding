import { SharedModule } from './site/shared/shared.module';
import { AboutModule } from './site/about/about.module';
import { HomeModule } from './site/home/home.module';
import { FilmsModule } from './site/films/films.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule,
    HomeModule,
    AppRoutingModule,
    AboutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
