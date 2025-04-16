import type { Meta, StoryObj } from '@storybook/angular'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { IconControlComponent } from '@vet-client/lib-control'

const meta: Meta<IconControlComponent> = {
  component: IconControlComponent,
  title: 'Control/IconControl',
}
export default meta
type Story = StoryObj<IconControlComponent>

export const Default: Story = {
  args: {
    model: {
      icon: faCircleCheck,
    },
  },
}
