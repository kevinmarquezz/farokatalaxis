import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recurso, RecursoTipo, RecursoNivel } from '../models/recurso.model';
import { RECURSOS } from '../data/';

export interface RecursoFiltros {
  tipo?: RecursoTipo;
  nivel?: RecursoNivel;
  autorId?: string;
  tema?: string;
  idioma?: string;
  busqueda?: string;
}

@Injectable({ providedIn: 'root' })
export class RecursosService {

  getAll(): Observable<Recurso[]> {
    return of(RECURSOS);
  }

  getById(id: string): Observable<Recurso | undefined> {
    return of(RECURSOS.find(r => r.id === id));
  }

  getDestacados(): Observable<Recurso[]> {
    return of(RECURSOS.filter(r => r.destacado));
  }

  getByAutor(autorId: string): Observable<Recurso[]> {
    return of(RECURSOS.filter(r => r.autorId === autorId));
  }

  getByIds(ids: string[]): Observable<Recurso[]> {
    return of(ids.map(id => RECURSOS.find(r => r.id === id)).filter(Boolean) as Recurso[]);
  }

  filtrar(filtros: RecursoFiltros): Observable<Recurso[]> {
    let resultado = [...RECURSOS];

    if (filtros.tipo) {
      resultado = resultado.filter(r => r.tipo === filtros.tipo);
    }
    if (filtros.nivel) {
      resultado = resultado.filter(r => r.nivel === filtros.nivel);
    }
    if (filtros.autorId) {
      resultado = resultado.filter(r => r.autorId === filtros.autorId);
    }
    if (filtros.tema) {
      resultado = resultado.filter(r => r.temas.includes(filtros.tema!));
    }
    if (filtros.idioma) {
      resultado = resultado.filter(r => r.idioma === filtros.idioma);
    }
    if (filtros.busqueda) {
      const q = filtros.busqueda.toLowerCase();
      resultado = resultado.filter(r =>
        r.titulo.toLowerCase().includes(q) ||
        r.descripcion.toLowerCase().includes(q)
      );
    }

    return of(resultado);
  }
}