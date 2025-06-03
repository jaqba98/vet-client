import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';
import { UserStore } from '../../store/user.store';
import { UserModel } from '../../model/user.model';
import { HttpService } from '../../service/http.service';
import { EndpointEnum } from '../../enum/endpoint.enum';
import { MessageModel } from '../../model/message.model';
import { AudioRecorderComponent } from '../../component/audio-recorder/audio-recorder.component';
import { TopNavComponent } from '../../component/top-nav/top-nav.component';
import {
  VoiceRecordingOverlayComponent
} from '../../component/voice-recording-overlay/voice-recording-overlay.component';
import {VoiceRecorderService} from '../../store/voice-recorder.service';
import {CommonModule} from '@angular/common';
import {RecordingsListComponent} from './recordings-list/recordings-list-view.component';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss',
  imports: [TopNavComponent, VoiceRecordingOverlayComponent, CommonModule, RecordingsListComponent],
})
export class ProfileViewComponent {
  user: WritableSignal<UserModel>;
  message = signal('unknown');
  recording = false;

  constructor(
    private msalService: MsalService,
    private router: Router,
    private userStore: UserStore,
    private httpService: HttpService<ProfileViewComponent>,
    private voiceRecorderService: VoiceRecorderService
  ) {
    this.user = userStore.data;
    effect(() => {
      this.httpService.post<UserModel, MessageModel>(
        this,
        EndpointEnum.createUser,
        { ...this.user() },
        (self, response) => {
          self.message.set(response.message);
        },
      );
    });
    this.voiceRecorderService.recording$.subscribe(recording => {
      this.recording = recording;
    });
  }

  async logout() {
    await this.msalService.logout();
    this.userStore.reset();
    await this.router.navigate([RouteEnum.login]);
  }
}
