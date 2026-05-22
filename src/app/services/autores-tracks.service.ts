import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Autor, Track } from '../models/autor.model';
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

  getAll(): Observable<Track[]> {
    return of(TRACKS);
  }

  getById(id: string): Observable<Track | undefined> {
    return of(TRACKS.find(t => t.id === id));
  }

  getByNivel(nivel: string): Observable<Track[]> {
    return of(TRACKS.filter(t => t.nivel === nivel));
  }
}