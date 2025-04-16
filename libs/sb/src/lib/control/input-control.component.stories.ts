import { Meta, StoryObj } from '@storybook/angular'
import { FormGroup } from '@angular/forms'

import { InputControlComponent } from '@vet-client/lib-control'

const meta: Meta<InputControlComponent> = {
  component: InputControlComponent,
  title: 'Control/InputControl',
}
export default meta
type Story = StoryObj<InputControlComponent>

export const Default: Story = {
  args: {
    model: {
      type: 'text',
      label: 'Login',
      placeholder: 'Enter your login',
      formGroup: new FormGroup({}),
      controlName: 'login',
      isError: false,
    },
  },
}
