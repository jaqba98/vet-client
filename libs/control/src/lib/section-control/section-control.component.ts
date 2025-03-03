import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { SectionContentControlModel, SectionMainControlModel } from './section-control.model';

@Component({
  selector: 'lib-section-control',
  imports: [CommonModule],
  templateUrl: './section-control.component.html',
  styleUrl: './section-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class SectionControlComponent {
  @Input({ required: true }) sectionId!: RouteSectionEnum;

  @Input() sectionBackgroundSurface = false;
  @Input() sectionContentMarginAuto = false;
  @Input() sectionContentMaxWidth960px = false;
  @Input() sectionContentFlex = false;
  @Input() sectionContentFlexDirectionColumn = false;
  @Input() sectionContentFlexGapSmall = false;
  @Input() sectionContentFlexGapMedium = false;

  getMainClassList(): SectionMainControlModel {
    return {
      'section-control--background-surface': this.sectionBackgroundSurface
    };
  }

  getContentClassList(): SectionContentControlModel {
    return {
      'section-control__content--margin-auto': this.sectionContentMarginAuto,
      'section-control__content--max-width-960px': this.sectionContentMaxWidth960px,
      'section-control__content--flex': this.sectionContentFlex,
      'section-control__content--flex-direction-column': this.sectionContentFlexDirectionColumn,
      'section-control__content--flex-gap-small': this.sectionContentFlexGapSmall,
      'section-control__content--flex-gap-medium': this.sectionContentFlexGapMedium
    };
  }
}
