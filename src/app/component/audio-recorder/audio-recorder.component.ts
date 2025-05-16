import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'audio-recorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-recorder.component.html'
})
export class AudioRecorderComponent {
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];

  isRecording = false;
  audioUrl: string | null = null;
  transcribedText: any | null = null;

  constructor(private ngZone: NgZone, private http: HttpClient) {}

  startRecording() {
    this.audioUrl = null;
    this.transcribedText = null;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
        this.mediaRecorder = new MediaRecorder(stream, { mimeType });
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType });
          if (audioBlob.size > 0) {
            const url = URL.createObjectURL(audioBlob);
            this.ngZone.run(() => {
              this.audioUrl = url;
              this.sendAudioToBackend(audioBlob);
            });
          }
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      })
      .catch(err => {
        console.error('Błąd mikrofonu:', err);
      });
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.requestData();
      setTimeout(() => {
        if (this.mediaRecorder.state !== 'inactive') {
          this.mediaRecorder.stop();
        }
        this.isRecording = false;
      }, 200);
    }
  }

  sendAudioToBackend(blob: Blob) {
    const formData = new FormData();
    formData.append('file', blob, 'audio.webm');

    this.http.post('http://localhost:8080/api/speech-to-text', formData, { responseType: 'text' })
      .subscribe({
        next: response => {
          this.transcribedText = JSON.parse(response).DisplayText;
        },
        error: err => {
          this.transcribedText = 'Błąd podczas rozpoznawania mowy.';
          console.error(err);
        }
      });
  }
}
