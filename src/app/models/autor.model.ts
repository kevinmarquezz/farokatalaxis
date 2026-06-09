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
  introduccion: string;   // Por qué este recurso en este momento
  enfoque?: string;       // Qué prestarle atención específicamente
}

export interface LearningTrack {
  id: string;
  titulo: string;
  tagline: string;        // Frase corta y directa
  descripcion: string;    // Descripción más larga
  objetivo: string;       // "Al terminar esto vas a poder/entender..."
  paraQuien: string[];    // Perfiles del lector ideal
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  pasos: TrackPaso[];
  duracionTotal: string;
  color?: string;
  temas?: string[];
  categoria?: 'empezar' | 'profundizar';
}

export interface Tema {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
}