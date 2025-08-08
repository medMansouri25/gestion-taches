import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TachesComponent } from './taches/taches.component';

// ✅ pages
import { ListeTachesComponent } from './pages/liste-taches/liste-taches.component';
import { AjoutTacheComponent } from './pages/ajout-tache/ajout-tache.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    ListeTachesComponent,
    AjoutTacheComponent
  ],
  imports: [
    BrowserModule, // ✅ pour le navigateur
    AppRoutingModule, // ✅ pour la navigation
    FormsModule, // ✅ pour les formulaires
    HttpClientModule // ✅ pour les requêtes HTTP
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
