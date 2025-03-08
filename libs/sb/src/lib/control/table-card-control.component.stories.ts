import type { Meta, StoryObj } from '@storybook/angular'

import { TableCardControlComponent } from '@vet-client/lib-control'

const meta: Meta<TableCardControlComponent> = {
  component: TableCardControlComponent,
  title: 'Control/TableCard',
}
export default meta
type Story = StoryObj<TableCardControlComponent>

export const Default: Story = {}

export const Title: Story = {
  args: {
    title: 'Hello',
  },
}

export const MaxWidth640px: Story = {
  args: {
    title: 'Hello',
  },
}
