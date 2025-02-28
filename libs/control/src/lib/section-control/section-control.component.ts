// done
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
export class SectionControlComponent {
  @Input({ required: true }) sectionId!: string;

  @Input() sectionBackgroundPrimary = false;

  @Input() sectionBackgroundSurface = false;

  @Input() sectionContentFlex = false;

  @Input() sectionContentAlignCenter = false;

  @Input() sectionContentJustifyCenter = false;

  @Input() sectionContentJustifySpaceAround = false;

  @Input() sectionContentGap1rem = false;

  @Input() sectionContentGap2rem = false;

  @Input() sectionContentMarginAuto = false;

  @Input() sectionContentMaxWidth480px = false;

  @Input() sectionContentMaxWidth960px = false;

  getSectionClassList() {
    return {
      section: true
    };
  }

  getSectionBackgroundClassList() {
    return {
      section__background: true,
      'section__background--primary': this.sectionBackgroundPrimary,
      'section__background--surface': this.sectionBackgroundSurface
    };
  }

  getSectionContentClassList() {
    return {
      section__content: true,
      'section__content--flex': this.sectionContentFlex,
      'section__content--align-center': this.sectionContentAlignCenter,
      'section__content--justify-center': this.sectionContentJustifyCenter,
      'section__content--justify-space-around': this.sectionContentJustifySpaceAround,
      'section__content--gap-1rem': this.sectionContentGap1rem,
      'section__content--gap-2rem': this.sectionContentGap2rem,
      'section__content--margin-auto': this.sectionContentMarginAuto,
      'section__content--max-width-480px': this.sectionContentMaxWidth480px,
      'section__content--max-width-960px': this.sectionContentMaxWidth960px,
    };
  }
}
