export type RecursoTipo = 'libro' | 'video' | 'articulo' | 'podcast' | 'ensayo' | 'curso';
export type RecursoNivel = 'principiante' | 'intermedio' | 'avanzado';
export type RecursoIdioma = 'es' | 'en';

export interface Recurso {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: RecursoTipo;
  nivel: RecursoNivel;
  idioma: RecursoIdioma;
  autorId: string;
  temas: string[];
  url: string;
  portadaColor?: string; 
  portadaTextoColor?: string;
  anio?: number;
  duracion?: string; 
  destacado?: boolean;
  imagenUrl?: string;
}