import type { Meta, StoryObj } from '@storybook/angular'

import { ErrorControlComponent } from '@vet-client/lib-control'

const meta: Meta<ErrorControlComponent> = {
  component: ErrorControlComponent,
  title: 'Control/ErrorControl',
}
export default meta
type Story = StoryObj<ErrorControlComponent>

export const Default: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
}
