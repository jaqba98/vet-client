import type { Meta, StoryObj } from '@storybook/angular'

import { SuccessControlComponent } from '@vet-client/lib-control'

const meta: Meta<SuccessControlComponent> = {
  component: SuccessControlComponent,
  title: 'Control/SuccessControl',
}
export default meta
type Story = StoryObj<SuccessControlComponent>

export const Default: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
}
