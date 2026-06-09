import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recurso } from '../../models/recurso.model';
import { RecursosService } from '../../services/recursos.service';
import { AutoresService } from '../../services/autores-tracks.service';
import { Autor } from '../../models/autor.model';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-recurso',
  standalone: false,
  templateUrl: './recurso.html',
  styleUrl: './recurso.scss',
})
export class RecursoComponent implements OnInit {
  recurso: Recurso | undefined;
  autor: Autor | undefined;
  relacionados: Recurso[] = [];
  autoresMap: Record<string, Autor> = {};
  cargando = true;

  get tipoLabel(): string {
    const labels: Record<string, string> = {
      libro: 'Libro', video: 'Video', articulo: 'Artículo',
      podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
    };
    return this.recurso ? (labels[this.recurso.tipo] ?? this.recurso.tipo) : '';
  }

  get nivelLabel(): string {
    const labels: Record<string, string> = {
      principiante: 'Principiante', intermedio: 'Intermedio', avanzado: 'Avanzado',
    };
    return this.recurso ? (labels[this.recurso.nivel] ?? this.recurso.nivel) : '';
  }

  get idiomaLabel(): string {
    return this.recurso?.idioma === 'es' ? 'Español' : 'Inglés';
  }

  get nivelClass(): string {
    if (!this.recurso) return '';
    const map: Record<string, string> = {
      principiante: 'nivel-p', intermedio: 'nivel-i', avanzado: 'nivel-a',
    };
    return map[this.recurso.nivel] ?? '';
  }

  get badgeNivelClass(): string {
    if (!this.recurso) return '';
    const map: Record<string, string> = {
      principiante: 'badge-nivel-p', intermedio: 'badge-nivel-i', avanzado: 'badge-nivel-a',
    };
    return map[this.recurso.nivel] ?? '';
  }

  tipoLabelMap: Record<string, string> = {
    libro: 'Libro', video: 'Video', articulo: 'Artículo',
    podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recursosService: RecursosService,
    private autoresService: AutoresService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.autoresService.getAll().subscribe(autores => {
      this.autoresMap = Object.fromEntries(autores.map(a => [a.id, a]));
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) { this.router.navigate(['/biblioteca']); return; }
      this.cargar(id);
    });
  }

  cargar(id: string): void {
    this.cargando = true;
    this.relacionados = [];

    this.recursosService.getById(id).subscribe(recurso => {
      if (!recurso) { this.router.navigate(['/biblioteca']); return; }
      this.recurso = recurso;
      this.autor = this.autoresMap[recurso.autorId];
      this.cargando = false;

      this.recursosService.getAll().subscribe(todos => {
        const porAutor = todos.filter(r =>
          r.id !== id && r.autorId === recurso.autorId
        );
        const porTema = todos.filter(r =>
          r.id !== id &&
          r.autorId !== recurso.autorId &&
          r.temas.some(t => recurso.temas.includes(t))
        );

        const mezclados = [...porAutor, ...porTema];
        const unicos = mezclados.filter((r, i, arr) => arr.findIndex(x => x.id === r.id) === i);
        this.relacionados = unicos.slice(0, 3);
      });
      
      this.seo.setPage(recurso.titulo, recurso.descripcion);

    });

  }

  getAutorNombre(autorId: string): string {
    return this.autoresMap[autorId]?.nombre ?? autorId;
  }
}