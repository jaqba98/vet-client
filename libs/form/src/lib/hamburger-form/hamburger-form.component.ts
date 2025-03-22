import { Component, OnInit } from '@angular/core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { take } from 'rxjs'

import { NavStoreType, navSwitchIsOpen } from '@vet-client/lib-store'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { HamburgerFormModel, HamburgerModel } from './hamburger-form.model'

@Component({
  selector: 'lib-hamburger-form',
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class HamburgerFormComponent
  extends BaseFormService<HamburgerFormModel, HamburgerModel>
  implements OnInit {
  constructor(
    private store: Store<NavStoreType>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      hamburger: this.baseForm.buildButtonIcon('hamburger', faBars, 'primary').build(),
    })
  }

  override onSubmit(model: HamburgerModel) {
    if (model.hamburger) {
      this.store
        .select('nav')
        .pipe(take(1))
        .subscribe((data) => {
          this.store.dispatch(navSwitchIsOpen({ isOpen: !data.isOpen }))
        })
    }
  }
}
