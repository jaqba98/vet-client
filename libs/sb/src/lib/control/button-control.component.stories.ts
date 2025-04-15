import { Meta, StoryObj } from '@storybook/angular'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { ButtonControlComponent } from '@vet-client/lib-control'

const meta: Meta<ButtonControlComponent> = {
  component: ButtonControlComponent,
  title: 'Control/ButtonControl',
}
export default meta
type Story = StoryObj<ButtonControlComponent>

export const Button: Story = {
  args: {
    model: {
      type: 'text',
      text: 'Hello World',
    },
  },
}

export const Icon: Story = {
  args: {
    model: {
      type: 'icon',
      icon: {
        icon: faCircleCheck,
      },
    },
  },
}
