import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent {
  tasks = ['Apprendre Angular', 'Faire les devoirs', 'Lire un article'];
}

