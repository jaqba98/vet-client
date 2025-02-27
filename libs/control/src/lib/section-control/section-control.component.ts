import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-section-control',
  imports: [CommonModule],
  templateUrl: './section-control.component.html',
  styleUrl: './section-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** Section Control */
export class SectionControlComponent {
  @Input({ required: true }) sectionId!: string;

  @Input() marginAutoMax960px = false;

  @Input() marginAutoMax480px = false;

  @Input() backgroundPrimary = false;

  @Input() background = false;

  @Input() backgroundSurface = false;

  @Input() backgroundPrimary80 = false;

  @Input() backgroundImageGuineaPig = false;

  @Input() minHeight640 = false;

  @Input() flexCenter = false;

  @Input() fullHeightWithNav = false;

  getSectionClassList() {
    return {
      'section--background-image-guinea-pig': this.backgroundImageGuineaPig,
      'section--min-height640': this.minHeight640,
      'section--full-height-with-nav': this.fullHeightWithNav
    };
  }

  getSectionBackgroundClassList() {
    return {
      'section__background--primary': this.backgroundPrimary,
      'section__background--background': this.background,
      'section__background--surface': this.backgroundSurface,
      'section__background--primary80': this.backgroundPrimary80,
      'section__background--min-height640': this.minHeight640,
      'section__background--full-height-with-nav': this.fullHeightWithNav
    };
  }

  getSectionContentClassList() {
    return {
      'section__content--margin-auto-max-960px': this.marginAutoMax960px,
      'section__content--margin-auto-max-480px': this.marginAutoMax480px,
      'section__content--min-height640': this.minHeight640,
      'section__content--flex-center': this.flexCenter,
      'section__content--full-height-with-nav': this.fullHeightWithNav
    };
  }
}
