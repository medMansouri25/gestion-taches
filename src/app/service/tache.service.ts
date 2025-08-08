import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../taches/taches.model';

@Injectable({ providedIn: 'root' })
export class TacheService {
  private apiUrl = 'http://localhost:8080/api/taches';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tache[]> { return this.http.get<Tache[]>(this.apiUrl); }
  add(t: Tache): Observable<Tache> { return this.http.post<Tache>(this.apiUrl, t); }
  update(t: Tache): Observable<Tache> { return this.http.put<Tache>(`${this.apiUrl}/${t.id}`, t); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}


