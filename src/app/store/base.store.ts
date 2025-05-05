import { signal, WritableSignal } from '@angular/core';

export class BaseStore<TData> {
  data: WritableSignal<TData>;

  constructor(public initialData: TData) {
    this.data = signal(initialData);
  }

  setData(data: TData) {
    this.data.set(data);
  }

  getData() {
    return this.data();
  }

  reset() {
    this.data.set(this.initialData);
  }
}
