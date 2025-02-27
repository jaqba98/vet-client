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

  @Input() sectionContentMarginAuto = false;

  @Input() sectionContentMaxWidth480px = false;

  getSectionClassList() {
    return {
      section: true
    };
  }

  getSectionBackgroundClassList() {
    return {
      section__background: true,
      'section__background--primary': this.sectionBackgroundPrimary
    };
  }

  getSectionContentClassList() {
    return {
      section__content: true,
      'section__content--margin-auto': this.sectionContentMarginAuto,
      'section__content--max-width-480px': this.sectionContentMaxWidth480px,
    };
  }
}
