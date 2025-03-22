import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreModel,
} from '@vet-client/lib-store'
import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { HomeNavMenuDomainModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-home-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './home-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class HomeNavMenuFormComponent
  extends BaseFormService<HomeNavMenuDomainModel, HomeNavMenuDomainModel>
  implements OnInit, OnDestroy {
  @Input() isHorizontal = true

  constructor(
    private baseForm: BaseFormBuilder,
    private store: Store<RouteStoreModel>,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      home: this.baseForm.buildButton('home', 'Home', 'primary').build(),
      aboutUs: this.baseForm
        .buildButton('aboutUs', 'About us', 'primary')
        .build(),
      price: this.baseForm.buildButton('price', 'Price', 'primary').build(),
      contact: this.baseForm
        .buildButton('contact', 'Contact', 'primary')
        .build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: HomeNavMenuDomainModel) {
    if (domain.home) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.home,
        }),
      )
    }
    else if (domain.aboutUs) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.aboutUs,
        }),
      )
    }
    else if (domain.price) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.price,
        }),
      )
    }
    else if (domain.contact) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.contact,
        }),
      )
    }
  }
}
