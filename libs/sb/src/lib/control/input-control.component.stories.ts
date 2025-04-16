import { Meta, StoryObj } from '@storybook/angular'

import { InputControlComponent } from '@vet-client/lib-control'

const meta: Meta<InputControlComponent> = {
  component: InputControlComponent,
  title: 'Control/InputControl',
}
export default meta
type Story = StoryObj<InputControlComponent>

export const Label: Story = {
  args: {
    model: {
      type: 'text',
      label: 'Login',
      placeholder: '',
      controlName: 'login',
      isError: false,
    },
  },
}

export const Placeholder: Story = {
  args: {
    model: {
      type: 'text',
      label: '',
      placeholder: 'Enter your login',
      controlName: 'login',
      isError: false,
    },
  },
}
