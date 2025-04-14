import { Meta, StoryObj } from '@storybook/angular'

import { ButtonControlComponent } from '@vet-client/lib-control'
import { ButtonControlTypeEnum } from '@vet-client/lib-control'

const meta: Meta<ButtonControlComponent> = {
  component: ButtonControlComponent,
  title: 'Control/ButtonControl',
}
export default meta
type Story = StoryObj<ButtonControlComponent>

export const Button: Story = {
  args: {
    model: {
      type: ButtonControlTypeEnum.text,
      text: 'Hello World',
    },
  },
}
