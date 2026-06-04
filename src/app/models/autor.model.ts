export type EscuelaEconomica = 'austriaca' | 'chicago' | 'liberal-clasico' | 'otro';

export interface Autor {
  id: string;
  nombre: string;
  descripcion: string;
  escuela: EscuelaEconomica;
  fotoUrl?: string | null;
  wikipedia?: string;
  color?: string;
}

export interface TrackPaso {
  recursoId: string;
  introduccion: string;   
  enfoque?: string;       
}

export interface LearningTrack {
  id: string;
  titulo: string;
  tagline: string;        
  descripcion: string;    
  objetivo: string;       
  paraQuien: string[];    
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  pasos: TrackPaso[];
  duracionTotal: string;
  color?: string;
  temas?: string[];
}

export interface Tema {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
}