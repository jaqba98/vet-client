import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'voice-recording-overlay',
  templateUrl: './voice-recording-overlay.component.html',
  styleUrls: ['./voice-recording-overlay.component.scss'],
  standalone: true
})
export class VoiceRecordingOverlayComponent implements OnDestroy {
  @Output() stop = new EventEmitter<void>();

  startTime: number = Date.now();
  elapsed = '00:00:00';
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => {
      const diff = Date.now() - this.startTime;
      const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      this.elapsed = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  stopRecording() {
    this.stop.emit();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
