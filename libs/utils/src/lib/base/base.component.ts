import { Subscription, TeardownLogic } from 'rxjs'

export class BaseComponent {
  private sub?: Subscription

  initSubscription() {
    this.sub = new Subscription()
  }

  addSubscription(t: TeardownLogic) {
    if (!this.sub) {
      throw new Error('The subscription is not implemented.')
    }
    this.sub.add(t)
  }

  removeSubscriptions() {
    if (!this.sub) {
      throw new Error('The subscription is not implemented.')
    }
    this.sub.unsubscribe()
  }
}
