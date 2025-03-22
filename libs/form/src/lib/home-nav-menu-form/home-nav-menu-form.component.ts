import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreModel } from '@vet-client/lib-store'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  HomeNavMenuFormModel,
  HomeNavMenuModel,
} from './home-nav-menu-form.model'

@Component({
  selector: 'lib-home-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './home-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class HomeNavMenuFormComponent
  extends BaseFormService<HomeNavMenuFormModel, HomeNavMenuModel>
  implements OnInit {
  @Input() isHorizontal = true

  constructor(
    private store: Store<RouteStoreModel>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      home: this.baseForm.buildButton('home', 'Home', 'primary').build(),
      aboutUs: this.baseForm.buildButton('aboutUs', 'About us', 'primary').build(),
      price: this.baseForm.buildButton('price', 'Price', 'primary').build(),
      contact: this.baseForm.buildButton('contact', 'Contact', 'primary').build(),
    })
  }

  override onSubmit(model: HomeNavMenuModel) {
    const { home, aboutUs, price, contact } = model
    if (home) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.home, section: RouteSectionEnum.home }),
      )
    }
    else if (aboutUs) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.aboutUs,
        }),
      )
    }
    else if (price) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.home, section: RouteSectionEnum.price }),
      )
    }
    else if (contact) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.contact,
        }),
      )
    }
  }
}
