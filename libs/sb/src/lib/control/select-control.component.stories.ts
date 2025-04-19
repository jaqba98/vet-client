import type { Meta, StoryObj } from '@storybook/angular'

import { SelectControlComponent } from '@vet-client/lib-control'

const meta: Meta<SelectControlComponent> = {
  component: SelectControlComponent,
  title: 'Control/SelectControl',
}
export default meta
type Story = StoryObj<SelectControlComponent>

export const Default: Story = {
  args: {
    model: {
      label: 'Select',
      options: [
        { label: 'Select 1', value: 'select_1' },
        { label: 'Select 2', value: 'select_2' },
        { label: 'Select 3', value: 'select_3' },
        { label: 'Select 4', value: 'select_4' },
        { label: 'Select 5', value: 'select_5' },
      ],
      controlName: 'select',
    },
  },
}
