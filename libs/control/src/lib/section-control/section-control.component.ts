import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { SectionContentControlModel, SectionMainControlModel } from './section-control.model'

@Component({
  selector: 'lib-section-control',
  imports: [CommonModule],
  templateUrl: './section-control.component.html',
  styleUrl: './section-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class SectionControlComponent {
  // todo: Fix this any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input({ required: true }) sectionId!: any

  @Input() sectionFlexCenter = false
  @Input() sectionBackground = false
  @Input() sectionBackgroundPrimary = false
  @Input() sectionBackgroundSurface = false
  @Input() sectionBackgroundHeader = false
  @Input() sectionHeight480px = false
  @Input() sectionMinHeightFull = false
  @Input() sectionPaddingReset = false
  @Input() sectionHeight100 = false
  @Input() sectionContentMarginAuto = false
  @Input() sectionContentMaxWidth960px = false
  @Input() sectionContentMaxWidth360px = false
  @Input() sectionContentFlex = false
  @Input() sectionContentFlexCenter = false
  @Input() sectionContentFlexDirectionColumn = false
  @Input() sectionContentFlexGapSmall = false
  @Input() sectionContentFlexGapMedium = false
  @Input() sectionContentHeight100 = false

  getMainClassList(): SectionMainControlModel {
    return {
      'section-control--flex-center': this.sectionFlexCenter,
      'section-control--background': this.sectionBackground,
      'section-control--background-primary': this.sectionBackgroundPrimary,
      'section-control--background-surface': this.sectionBackgroundSurface,
      'section-control--background-header': this.sectionBackgroundHeader,
      'section-control--height-480px': this.sectionHeight480px,
      'section-control--min-height-full': this.sectionMinHeightFull,
      'section-control--padding-reset': this.sectionPaddingReset,
      'section-control--height-100': this.sectionHeight100,
    }
  }

  getContentClassList(): SectionContentControlModel {
    return {
      'section-control__content--margin-auto': this.sectionContentMarginAuto,
      'section-control__content--max-width-960px': this.sectionContentMaxWidth960px,
      'section-control__content--max-width-360px': this.sectionContentMaxWidth360px,
      'section-control__content--flex': this.sectionContentFlex,
      'section-control__content--flex-center': this.sectionContentFlexCenter,
      'section-control__content--flex-direction-column': this.sectionContentFlexDirectionColumn,
      'section-control__content--flex-gap-small': this.sectionContentFlexGapSmall,
      'section-control__content--flex-gap-medium': this.sectionContentFlexGapMedium,
      'section-control__content--height-100': this.sectionContentHeight100,
    }
  }
}
