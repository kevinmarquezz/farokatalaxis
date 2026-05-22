import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { RecursoComponent } from './pages/recurso/recurso';
import { Tracks } from './pages/tracks/tracks';
import { Track } from './pages/track/track';
import { Navbar } from './shared/components/navbar/navbar';
import { RecursoCard } from './shared/components/recurso-card/recurso-card';
import { TrackCard } from './shared/components/track-card/track-card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { Footer } from './shared/footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Catalogo,
    RecursoComponent,
    Tracks,
    Track,
    Navbar,
    RecursoCard,
    TrackCard,
    Footer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
