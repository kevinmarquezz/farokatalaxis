import { Component, OnInit } from '@angular/core';
import { Recurso, RecursoTipo, RecursoNivel } from '../../models/recurso.model';
import { RecursosService, RecursoFiltros } from '../../services/recursos.service';
import { AutoresService } from '../../services/autores-tracks.service';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo implements OnInit {
  searchQuery = '';
  selectedType = '';
  selectedAuthor = '';
  selectedDifficulty = '';
  isFilterOpen = false;
  imgLoaded: Record<string, boolean> = {};

  allRecursos: Recurso[] = [];
  filteredResources: Recurso[] = [];
  autoresMap: Record<string, Autor> = {};

  types = [
    { value: 'libro', label: 'Libros' },
    { value: 'video', label: 'Videos' },
    { value: 'articulo', label: 'Artículos' },
    { value: 'podcast', label: 'Podcasts' },
    { value: 'ensayo', label: 'Ensayos' },
  ];

  authors: Autor[] = [];

  difficulties = [
    { value: 'principiante', label: 'Principiante' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' },
  ];

  constructor(
    private recursosService: RecursosService,
    private autoresService: AutoresService,
  ) {}

  ngOnInit(): void {
    this.recursosService.getAll().subscribe(recursos => {
      this.allRecursos = recursos;
      this.filteredResources = recursos;
    });

    this.autoresService.getAll().subscribe(autores => {
      this.authors = autores;
      this.autoresMap = Object.fromEntries(autores.map(a => [a.id, a]));
    });
  }

  filterResources(): void {
    const filtros: RecursoFiltros = {};

    if (this.selectedType) filtros.tipo = this.selectedType as RecursoTipo;
    if (this.selectedAuthor) filtros.autorId = this.selectedAuthor;
    if (this.selectedDifficulty) filtros.nivel = this.selectedDifficulty as RecursoNivel;
    if (this.searchQuery) filtros.busqueda = this.searchQuery;

    this.recursosService.filtrar(filtros).subscribe(recursos => {
      this.filteredResources = recursos;
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedType = '';
    this.selectedAuthor = '';
    this.selectedDifficulty = '';
    this.filteredResources = [...this.allRecursos];
  }

  toggleFilters(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  getAutor(autorId: string): Autor | undefined {
    return this.autoresMap[autorId];
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      libro: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      video: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z',
      articulo: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
      podcast: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z',
      ensayo: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
    };
    return icons[type] ?? icons['libro'];
  }

  getDifficultyClass(difficulty: string): string {
    return `difficulty-${difficulty}`;
  }

onImgLoad(id: string): void {
  this.imgLoaded[id] = true;
}

onImgError(event: Event): void {
  (event.target as HTMLImageElement).style.display = 'none';
}

  getActiveFiltersCount(): number {
    let count = 0;
    if (this.selectedType) count++;
    if (this.selectedAuthor) count++;
    if (this.selectedDifficulty) count++;
    return count;
  }

  get tipoLabel(): Record<string, string> {
    return {
      libro: 'Libro', video: 'Video', articulo: 'Artículo',
      podcast: 'Podcast', ensayo: 'Ensayo', curso: 'Curso',
    };
  }
}