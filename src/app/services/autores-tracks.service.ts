import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Autor, LearningTrack } from '../models/autor.model';
import { AUTORES, TRACKS } from '../data';

@Injectable({ providedIn: 'root' })
export class AutoresService {

  getAll(): Observable<Autor[]> {
    return of(AUTORES);
  }

  getById(id: string): Observable<Autor | undefined> {
    return of(AUTORES.find(a => a.id === id));
  }
}

@Injectable({ providedIn: 'root' })
export class TracksService {

  getAll(): Observable<LearningTrack[]> {
    return of(TRACKS);
  }

  getById(id: string): Observable<LearningTrack | undefined> {
    return of(TRACKS.find(t => t.id === id));
  }

  getByNivel(nivel: string): Observable<LearningTrack[]> {
    return of(TRACKS.filter(t => t.nivel === nivel));
  }
}