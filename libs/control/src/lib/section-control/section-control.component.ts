import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-section-control',
  imports: [CommonModule],
  templateUrl: './section-control.component.html',
  styleUrl: './section-control.component.scss'
})
export class SectionControlComponent {
  @Input() marginAutoMax960px = false;

  @Input() backgroundPrimary = false;

  @Input() backgroundSurface = false;

  @Input() backgroundPrimary80 = false;

  @Input() backgroundImageGuineaPig = false;

  @Input() minHeight640 = false;

  @Input() flexCenter = false;

  getSectionClassList() {
    return {
      'section--background-image-guinea-pig': this.backgroundImageGuineaPig,
      'section--min-height640': this.minHeight640,
    };
  }

  getSectionBackgroundClassList() {
    return {
      'section__background--primary': this.backgroundPrimary,
      'section__background--surface': this.backgroundSurface,
      'section__background--primary80': this.backgroundPrimary80,
      'section__background--min-height640': this.minHeight640
    };
  }

  getSectionContentClassList() {
    return {
      'section__content--margin-auto-max-960px': this.marginAutoMax960px,
      'section__content--min-height640': this.minHeight640,
      'section__content--flex-center': this.flexCenter
    };
  }
}
