import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreModel } from '@vet-client/lib-store'
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
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

  constructor(private readonly store: Store<RouteStoreModel>) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      home: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Home',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        isSquare: false,
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: {
          type: 'text',
          text: 'About us',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        isSquare: false,
      },
      price: {
        id: 'price',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Price',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        isSquare: false,
      },
      contact: {
        id: 'contact',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Contact',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        isSquare: false,
      },
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
