import { Component, NgZone, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VoiceRecorderService } from '../../store/voice-recorder.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'audio-recorder',
  imports: [CommonModule],
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss'],
  standalone: true,
})
export class AudioRecorderComponent implements OnDestroy {
  isRecording = false;
  audioUrl: string | null = null;
  transcribedText: any | null = null;
  analysisResult: any;

  showSavedPopup = false;

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

          // Zapis do bazy danych
          this.saveRecording(this.transcribedText);

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

  saveRecording(transcript: string) {
    const data = {
      fileName: 'nagranie-' + new Date().toISOString() + '.webm',
      createdAt: new Date().toISOString(),
      transcript: transcript,
    };

    this.http.post('http://localhost:8080/api/recordings', data).subscribe({
      next: () => {
        this.showSavedPopup = true;

        // Po 2,5 sekundach ukryj popup
        timer(2500).subscribe(() => {
          this.ngZone.run(() => (this.showSavedPopup = false));
        });
      },
      error: (err) => {
        console.error('Błąd zapisu nagrania:', err);
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
