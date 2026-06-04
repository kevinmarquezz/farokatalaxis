import { Component, OnInit } from '@angular/core';
import { LearningTrack } from '../../models/autor.model';
import { TracksService } from '../../services/autores-tracks.service';

@Component({
  selector: 'app-tracks',
  standalone: false,
  templateUrl: './tracks.html',
  styleUrl: './tracks.scss',
})
export class Tracks implements OnInit {
  tracks: LearningTrack[] = [];

  nivelLabel: Record<string, string> = {
    principiante: 'Principiante',
    intermedio: 'Intermedio',
    avanzado: 'Avanzado',
  };

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    this.tracksService.getAll().subscribe(tracks => {
      this.tracks = tracks;
    });
  }
}