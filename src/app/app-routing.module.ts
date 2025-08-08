import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeTachesComponent } from './pages/liste-taches/liste-taches.component';
import { AjoutTacheComponent } from './pages/ajout-tache/ajout-tache.component';

const routes: Routes = [
  { path: 'taches', component: ListeTachesComponent },
  { path: 'ajouter', component: AjoutTacheComponent },
  { path: '', redirectTo: 'taches', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

