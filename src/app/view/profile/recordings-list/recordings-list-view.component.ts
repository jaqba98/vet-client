import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Recording {
  id: string;
  fileName: string;
  createdAt: string;
  transcript: string;
  showTranscript?: boolean;
}

@Component({
  selector: 'app-recordings-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recordings-list-view.component.html',
  styleUrls: ['./recordings-list-view.component.scss'],
})
export class RecordingsListComponent implements OnInit {
  recordings: Recording[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRecordings();
  }

  loadRecordings() {
    this.http.get<Recording[]>('http://localhost:8080/api/recordings').subscribe({
      next: (data) => (this.recordings = data),
      error: (err) => console.error('Błąd ładowania nagrań:', err),
    });
  }

  toggleTranscript(recording: Recording) {
    recording.showTranscript = !recording.showTranscript;
  }

  analyzeRecording(recording: Recording) {
    const analyzeUrl = 'http://localhost:8080/api/analyze';
    const analyzePayload = { text: recording.transcript };

    this.http.post<any>(analyzeUrl, analyzePayload).subscribe({
      next: (analysis) => {
        console.log('Wynik analizy:', analysis);

        const keyValuePairs = analysis.documents.flatMap((doc: any) =>
          doc.entities.map((entity: any) => ({
            key: entity.category + (entity.subcategory ? `.${entity.subcategory}` : ''),
            value: entity.text
          }))
        );

        const saveUrl = 'http://localhost:8080/recordings';
        this.http.post(saveUrl, { data: keyValuePairs }).subscribe({
          next: () => {
            console.log('Zapisano analizę');
            // 🔽 Po zapisie pobierz wszystkie rekordy
            this.http.get<any[]>('http://localhost:8080/recordings').subscribe({
              next: (allRecords) => {
                console.log('Aktualne rekordy w bazie:', allRecords);
              },
              error: (err) => {
                console.error('Błąd przy pobieraniu danych:', err);
              }
            });
          },
          error: (err) => {
            console.error('Błąd zapisu:', err);
          }
        });
      },
      error: (err) => {
        console.error('Błąd analizy tekstu:', err);
      },
    });
  }



  deleteRecording(recording: Recording) {
    const confirmed = confirm(`Czy na pewno chcesz usunąć "${recording.fileName}"?`);
    if (!confirmed) return;

    this.http.delete(`http://localhost:8080/api/recordings/${recording.id}`).subscribe({
      next: () => {
        this.recordings = this.recordings.filter(r => r.id !== recording.id);
        alert('Nagranie zostało usunięte.');
      },
      error: (err) => {
        console.error('Błąd usuwania nagrania:', err);
        alert('Wystąpił błąd podczas usuwania.');
      }
    });
  }
}
