import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TData> implements OnInit {
  @Input({ required: true }) callback!: (self: TableDataFormComponent<TData>) => Observable<TData[]>

  rows!: TData[]

  constructor(
    public readonly cookie: CookieService,
    public readonly httpPost: HttpPostAppService,
  ) {}

  ngOnInit() {
    this.callback(this).subscribe((data) => {
      this.rows = data
    })
  }
}
