import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface TextAnalysis {
  id: string;
  fileName: string;
  analyzedAt: string;
  results: any; // Can be an object containing text analysis details
}

@Component({
  selector: 'app-text-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis-list-view.component.html',
  styleUrls: ['./analysis-list-view.component.scss'],
})
export class TextAnalysisComponent implements OnInit {
  analyses: TextAnalysis[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAnalyses();
  }

  loadAnalyses() {
    this.http.get<TextAnalysis[]>('http://localhost:8080/api/text-analyses').subscribe({
      next: (data) => (this.analyses = data),
      error: (err) => console.error('Błąd ładowania analiz tekstów:', err),
    });
  }
}
