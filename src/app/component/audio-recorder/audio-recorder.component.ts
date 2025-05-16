import { Component, NgZone } from '@angular/core';
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

  constructor(private ngZone: NgZone) {}

  startRecording(): void {
    this.audioUrl = null;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => this.initMediaRecorder(stream))
      .catch(() => {
        // Obsłuż błędy dostępu do mikrofonu w razie potrzeby
      });
  }

  private initMediaRecorder(stream: MediaStream): void {
    const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
    this.mediaRecorder = new MediaRecorder(stream, { mimeType });
    this.audioChunks = [];

    this.mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        this.audioChunks.push(event.data);
      }
    };

    this.mediaRecorder.onstop = () => this.handleRecordingComplete();
    this.mediaRecorder.start();
    this.isRecording = true;
  }

  private handleRecordingComplete(): void {
    const audioBlob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType });

    if (audioBlob.size > 0) {
      const url = URL.createObjectURL(audioBlob);
      this.ngZone.run(() => {
        this.audioUrl = url;
      });
    }
  }

  stopRecording(): void {
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
}
