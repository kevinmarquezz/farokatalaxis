export type EscuelaEconomica = 'austriaca' | 'chicago' | 'liberal-clasico' | 'otro';

export interface Autor {
  id: string;
  nombre: string;
  descripcion: string;
  escuela: EscuelaEconomica;
  fotoUrl?: string;
  wikipedia?: string;
  color?: string; 
}

export interface Track {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  recursosIds: string[]; 
  temas: string[];
  duracionEstimada: string; 
  color?: string;
  icono?: string; 
}

export interface Tema {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
}