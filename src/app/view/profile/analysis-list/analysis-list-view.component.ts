import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';

interface KeyValuePair {
  key: string;
  value: string;
}

interface RecordingAnalysis {
  id: number;
  data: KeyValuePair[];
}

@Component({
  selector: 'app-recording-list',
  imports: [CommonModule],
  templateUrl: './analysis-list-view.component.html',
  styleUrls: ['./analysis-list-view.component.scss']
})
export class RecordingListComponent implements OnInit {
  analyses: RecordingAnalysis[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<RecordingAnalysis[]>('http://localhost:8080/recordings')
      .subscribe({
        next: (data) => {
          this.analyses = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Błąd pobierania analiz:', err);
          this.isLoading = false;
        }
      });
  }
}
