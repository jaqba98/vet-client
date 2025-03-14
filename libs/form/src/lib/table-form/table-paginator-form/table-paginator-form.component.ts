// done
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faBackward, faBackwardFast, faForward, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ControlButtonBuilder, ControlButtonModel } from '@vet-client/lib-base-form'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent implements OnInit, OnDestroy {
  @Input({ required: true }) selectPage!: () => Observable<number>
  @Input({ required: true }) dispatchPage!: (page: number) => void

  // I am here
  readonly first: ControlButtonModel
  readonly previous: ControlButtonModel
  readonly next: ControlButtonModel
  readonly last: ControlButtonModel

  page = 0

  maxPage = 0

  private readonly sub: Subscription

  constructor(
    private readonly route: ActivatedRoute,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.sub = new Subscription()
    this.first = this.controlButton
      .buildBase('first')
      .buildIsSquare(true)
      .buildIcon(faBackwardFast, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.previous = this.controlButton
      .buildBase('previous')
      .buildIsSquare(true)
      .buildIcon(faBackward, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.next = this.controlButton
      .buildBase('next')
      .buildIsSquare(true)
      .buildIcon(faForward, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.last = this.controlButton
      .buildBase('last')
      .buildIsSquare(true)
      .buildIcon(faForwardFast, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
  }

  ngOnInit() {
    this.sub.add(this.route.paramMap.subscribe((params) => {
      const page = Number(params.get('page'))
      if (page) {
        this.dispatchPage(page)
      }
    }))
    this.sub.add(this.selectPage().subscribe((page) => {
      this.page = page
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onFirstPageEvent() {
    this.dispatchPage(1)
  }

  onPreviousPageEvent() {
    if (this.page > 1) {
      this.dispatchPage(this.page - 1)
    }
  }

  onNextPageEvent() {
    if (this.page < this.maxPage) {
      this.dispatchPage(this.page + 1)
    }
  }

  onLastPageEvent() {
    this.dispatchPage(this.maxPage)
  }

  onSpecificPageEvent(page: string) {
    this.dispatchPage(Number(page))
  }

  getPageControls() {
    const controls: ControlButtonModel[] = []
    const pages = new Set<number>()
    pages.add(this.page)
    for (let i = 1; i <= 2; i++) {
      if (this.page - i > 0) pages.add(this.page - i)
    }
    for (let i = 1; i <= 2; i++) {
      if (this.page + i <= this.maxPage) pages.add(this.page + i)
    }
    while (pages.size < 5) {
      if (Math.min(...pages) > 1) {
        pages.add(Math.min(...pages) - 1)
      }
      else if (Math.max(...pages) < this.maxPage) {
        pages.add(Math.max(...pages) + 1)
      }
      else {
        break
      }
    }
    const sortedPages = Array.from(pages).sort()
    sortedPages.forEach((index: number) => {
      const id = index.toString()
      const control = this.controlButton
        .buildBase(id)
        .buildIsSquare(true)
        .buildText(id)
      if (index === this.page) {
        controls.push(control.buildColor('primary').build())
      }
      else {
        controls.push(control.buildColor('dark-secondary').build())
      }
    })
    return controls
  }
}
