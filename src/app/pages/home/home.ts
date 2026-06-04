import { Component, HostListener, OnInit } from '@angular/core';
import { LearningTrack } from '../../models/autor.model';
import { TracksService } from '../../services/autores-tracks.service';

interface EntryPoint {
  perfil: string;
  descripcion: string;
  track: LearningTrack;
}
 
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  email = '';
  entryPoints: EntryPoint[] = [];

  principles = [
    {
      icon: 'scale',
      title: 'Libertad Individual',
      description: 'El derecho inalienable de cada persona a vivir su vida según sus propios valores y decisiones.'
    },
    {
      icon: 'trending_up',
      title: 'Libre Mercado',
      description: 'El intercambio voluntario como motor del progreso y la prosperidad de las naciones.'
    },
    {
      icon: 'account_balance',
      title: 'Propiedad Privada',
      description: 'El fundamento de la civilización y la base de toda libertad económica y política.'
    },
    {
      icon: 'gavel',
      title: 'Estado Limitado',
      description: 'Un gobierno restringido a proteger los derechos individuales, no a violarlos.'
    }
  ];

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    const ENTRY_TRACK_IDS = [
      'empezar-desde-cero',
      'la-otra-vereda',
      'estudiante-economia',
    ];
 
    this.tracksService.getAll().subscribe(tracks => {
      const perfiles: Record<string, { perfil: string; descripcion: string }> = {
        'empezar-desde-cero': {
          perfil: 'Nunca leí sobre esto',
          descripcion: 'Empezá con los textos más accesibles de la tradición liberal.',
        },
        'la-otra-vereda': {
          perfil: 'Vengo de la izquierda',
          descripcion: 'Conocé el argumento liberal en serio, sin caricaturas.',
        },
        'estudiante-economia': {
          perfil: 'Soy estudiante de economía',
          descripcion: 'El contrapunto austriaco a lo que te enseñan en la facultad.',
        },
      };
 
      this.entryPoints = ENTRY_TRACK_IDS
        .map(id => {
          const track = tracks.find(t => t.id === id);
          if (!track) return null;
          return { ...perfiles[id], track };
        })
        .filter(Boolean) as EntryPoint[];
    });
  }

  featuredResource = {
    tag: 'Lectura Esencial',
    title: 'Camino de Servidumbre',
    author: 'Friedrich A. Hayek',
    description: 'La obra maestra que advierte sobre los peligros del colectivismo y la planificación central. Una lectura obligatoria para entender el siglo XX.',
    href: '/biblioteca/camino-de-servidumbre'
  };

  resources = [
    {
      title: 'La Acción Humana',
      author: 'Ludwig von Mises',
      type: 'Tratado',
      href: '/biblioteca/la-accion-humana'
    },
    {
      title: 'Libertad de Elegir',
      author: 'Milton Friedman',
      type: 'Ensayo',
      href: '/biblioteca/libertad-de-elegir'
    },
    {
      title: 'El Individualismo y el Orden Económico',
      author: 'Friedrich A. Hayek',
      type: 'Ensayo',
      href: '/biblioteca/individualismo-orden-economico'
    }
  ];

  onSubmit(): void {
    if (this.email) {
      console.log('Email submitted:', this.email);
      this.email = '';
    }
  }
}
