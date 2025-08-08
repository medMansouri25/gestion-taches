import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../service/tache.service';
import { Tache } from '../../taches/taches.model';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent implements OnInit {
  taches: Tache[] = [];
  loading = false;
  error = '';

  constructor(private srv: TacheService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.srv.getAll().subscribe({
      next: d => {
        this.taches = d;
        this.loading = false;
      },
      error: _ => {
        this.error = 'Erreur de chargement';
        this.loading = false;
      }
    });
  }

 toggle(t: Tache) {
  this.srv.update({ ...t, terminee: !t.terminee }).subscribe(() => this.load());
}

  remove(id?: number) {
    if (!id) return;
    this.srv.delete(id).subscribe(() => this.load());
  }
}
