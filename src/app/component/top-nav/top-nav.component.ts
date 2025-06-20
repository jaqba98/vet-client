import {
  Component,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoiceRecorderService } from '../../store/voice-recorder.service';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {}

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
    this.router.navigate(['./profile/record']);
    this.serviceMenuOpen = false;
  }

  recordings() {
    this.router.navigate(['./profile/recordings']);
    this.serviceMenuOpen = false;
  }

  analisis() {
    this.router.navigate(['./profile/analisis']);
    this.serviceMenuOpen = false;
  }

  healthBot() {
    this.serviceMenuOpen = false;
    this.router.navigate(['./profile/health-bot']);
  }
}
