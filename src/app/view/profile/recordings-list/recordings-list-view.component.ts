import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface Recording {
  id: string;
  fileName: string;
  createdAt: Date;
  transcript: string;
  showTranscript?: boolean;
}

@Component({
  selector: 'app-recordings-list',
  imports: [CommonModule],
  templateUrl: './recordings-list-view.component.html',
  styleUrls: ['./recordings-list-view.component.scss'],
  standalone: true
})
export class RecordingsListComponent {
  recordings: Recording[] = [
    {
      id: '1',
      fileName: 'nagranie-01.wav',
      createdAt: new Date(),
      transcript: 'To jest transkrypcja nagrania 01.'
    },
    {
      id: '2',
      fileName: 'nagranie-02.wav',
      createdAt: new Date(),
      transcript: 'To jest transkrypcja nagrania 02.'
    }
  ];

  toggleTranscript(recording: Recording) {
    recording.showTranscript = !recording.showTranscript;
  }

  analyzeRecording(recording: Recording) {
    alert(`Analiza nagrania: ${recording.fileName}\n(To tylko test – tutaj dodasz logikę analizy)`);
  }

  deleteRecording(recording: Recording) {
    const confirmed = confirm(`Czy na pewno chcesz usunąć "${recording.fileName}"?`);
    if (confirmed) {
      this.recordings = this.recordings.filter(r => r.id !== recording.id);
      alert('Nagranie zostało usunięte (testowo).');
    }
  }
}
