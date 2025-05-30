import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VoiceRecorderService {
  private recordingSubject = new BehaviorSubject<boolean>(false);
  recording$ = this.recordingSubject.asObservable();

  startRecording(): void {
    this.recordingSubject.next(true);
  }

  stopRecording(): void {
    this.recordingSubject.next(false);
  }

  get isRecording(): boolean {
    return this.recordingSubject.getValue();
  }
}
