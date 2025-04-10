import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { take } from 'rxjs'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { HamburgerDomainModel, HamburgerNavMenuFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { NavStoreType, navSwitchIsOpen } from '@vet-client/lib-store'

@Component({
  selector: 'lib-hamburger-form',
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class HamburgerFormComponent
  extends BaseFormService<HamburgerNavMenuFormModel, HamburgerDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private store: Store<NavStoreType>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit()
    this.initBaseForm({
      hamburger: this.baseForm
        .buildButtonIcon('hamburger', faBars, 'primary')
        .build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: HamburgerDomainModel) {
    if (domain.hamburger) {
      this.store.select('nav').pipe(take(1)).subscribe((data) => {
        this.store.dispatch(navSwitchIsOpen({ isOpen: !data.isOpen }))
      })
    }
  }
}
