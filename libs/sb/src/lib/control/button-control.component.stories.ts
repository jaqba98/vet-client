import type { Meta, StoryObj } from '@storybook/angular'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { ButtonControlComponent } from '@vet-client/lib-control'

const meta: Meta<ButtonControlComponent> = {
  component: ButtonControlComponent,
  title: 'Control/Button',
}
export default meta
type Story = StoryObj<ButtonControlComponent>

export const Default: Story = {
  args: {
    model: {
      id: 'click',
      value: {
        type: 'text',
        text: 'Click',
      },
      fullWidth: false,
      color: 'primary',
      isSquare: false,
    },
  },
}

export const Icon: Story = {
  args: {
    model: {
      id: 'click',
      value: {
        type: 'icon',
        icon: {
          icon: faBars,
          color: 'primary',
          fontSize: '1rem',
        },
      },
      fullWidth: false,
      color: 'primary',
      isSquare: false,
    },
  },
}

export const Link: Story = {
  args: {
    model: {
      id: 'click',
      value: {
        type: 'link',
        text: 'Click',
      },
      fullWidth: false,
      color: 'primary',
      isSquare: false,
    },
  },
}
