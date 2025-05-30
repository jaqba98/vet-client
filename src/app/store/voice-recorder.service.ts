import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VoiceRecorderService {
  private recordingSubject = new BehaviorSubject<boolean>(false);
  recording$ = this.recordingSubject.asObservable();

  private audioBlobSubject = new BehaviorSubject<Blob | null>(null);
  audioBlob$ = this.audioBlobSubject.asObservable();

  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];

  constructor(private ngZone: NgZone) {}

  startRecording(): void {
    if (this.recordingSubject.getValue()) return;

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
      this.mediaRecorder = new MediaRecorder(stream, { mimeType });
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType });
        this.ngZone.run(() => {
          this.audioBlobSubject.next(audioBlob);
          this.recordingSubject.next(false);
        });
      };

      this.mediaRecorder.start();
      this.ngZone.run(() => this.recordingSubject.next(true));
    }).catch(err => {
      console.error('Błąd mikrofonu:', err);
      this.ngZone.run(() => this.recordingSubject.next(false));
    });
  }

  stopRecording(): void {
    if (!this.recordingSubject.getValue()) return;

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.requestData();
      setTimeout(() => {
        if (this.mediaRecorder.state !== 'inactive') {
          this.mediaRecorder.stop();
        }
      }, 200);
    }
  }

  get isRecording(): boolean {
    return this.recordingSubject.getValue();
  }
}
