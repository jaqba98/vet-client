import { Component, NgZone, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VoiceRecorderService } from '../../store/voice-recorder.service';  // dostosuj ścieżkę
import { Subscription } from 'rxjs';

@Component({
  selector: 'audio-recorder',
  imports: [CommonModule],
  templateUrl: './audio-recorder.component.html',
})
export class AudioRecorderComponent implements OnDestroy {
  isRecording = false;
  audioUrl: string | null = null;
  transcribedText: any | null = null;
  analysisResult: any;

  private subscriptions = new Subscription();

  constructor(
    private ngZone: NgZone,
    private http: HttpClient,
    private voiceRecorderService: VoiceRecorderService
  ) {
    this.subscriptions.add(
      this.voiceRecorderService.recording$.subscribe(
        (recording) => this.ngZone.run(() => (this.isRecording = recording))
      )
    );

    this.subscriptions.add(
      this.voiceRecorderService.audioBlob$.subscribe((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          this.ngZone.run(() => {
            this.audioUrl = url;
            this.sendAudioToBackend(blob);
          });
        } else {
          this.ngZone.run(() => (this.audioUrl = null));
        }
      })
    );
  }

  sendAudioToBackend(blob: Blob) {
    const formData = new FormData();
    formData.append('file', blob, 'audio.webm');

    this.http
      .post('http://localhost:8080/api/speech-to-text', formData, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          const result = JSON.parse(response);
          this.transcribedText = result.DisplayText;

          const analyzeUrl = 'http://localhost:8080/api/analyze';
          const analyzePayload = { text: this.transcribedText };

          this.http.post<any>(analyzeUrl, analyzePayload).subscribe({
            next: (analysis) => {
              this.analysisResult = analysis;
            },
            error: (err) => {
              console.error('Błąd analizy tekstu:', err);
            },
          });
        },
        error: (err) => {
          this.transcribedText = 'Błąd podczas rozpoznawania mowy.';
          console.error(err);
        },
      });
  }

  aaa() {
    const analyzeUrl = 'http://localhost:8080/api/analyze';
    const analyzePayload = { text: this.transcribedText };

    this.http.post<any>(analyzeUrl, analyzePayload).subscribe({
      next: (analysis) => {
        this.analysisResult = analysis;
      },
      error: (err) => {
        console.error('Błąd analizy tekstu:', err);
      },
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
