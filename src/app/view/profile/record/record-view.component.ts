import { Component } from '@angular/core';
import {VoiceRecorderService} from '../../../store/voice-recorder.service';

@Component({
  selector: 'audio-recorder',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.scss'],
  standalone: true,
})
export class RecordViewComponent {
  constructor(private voiceRecorderService: VoiceRecorderService) {}

  onRecordClick() {
    // alert('Nagrywanie rozpoczęte!');
    this.voiceRecorderService.startRecording();
  }
}
