import { Meta, StoryObj } from '@storybook/angular'

import { TextareaControlComponent } from '@vet-client/lib-control'

const meta: Meta<TextareaControlComponent> = {
  component: TextareaControlComponent,
  title: 'Control/TextareaControl',
}
export default meta
type Story = StoryObj<TextareaControlComponent>

export const Label: Story = {
  args: {
    model: {
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
      label: '',
      placeholder: 'Enter your login',
      controlName: 'login',
      isError: false,
    },
  },
}
