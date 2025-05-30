import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoiceRecorderService} from '../../store/voice-recorder.service';

@Component({
  selector: 'top-nav',
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true
})
export class TopNavComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  @ViewChild('dropdownWrapper') dropdownRef!: ElementRef;
  serviceMenuOpen = false;

  constructor(private voiceRecorderService: VoiceRecorderService) {
  }

  toggleServiceMenu(event: MouseEvent) {
    event.stopPropagation();
    this.serviceMenuOpen = !this.serviceMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.serviceMenuOpen &&
      this.dropdownRef &&
      !this.dropdownRef.nativeElement.contains(target)
    ) {
      this.serviceMenuOpen = false;
    }
  }

  onLogoutClick() {
    this.logoutClicked.emit();
  }

  startVoiceRecording() {
    this.serviceMenuOpen = false;
    this.voiceRecorderService.startRecording();
  }

  openAssistant() {
    console.log('🤖 Otwieram asystenta AI');
    this.serviceMenuOpen = false;
  }

  enterPresentationMode() {
    console.log('🖥️ Włączam tryb prezentacji');
    this.serviceMenuOpen = false;
  }
}
