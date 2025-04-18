import { Meta, StoryObj } from '@storybook/angular'

import { RadioControlComponent } from '@vet-client/lib-control'

const meta: Meta<RadioControlComponent> = {
  component: RadioControlComponent,
  title: 'Control/RadioControl',
}
export default meta
type Story = StoryObj<RadioControlComponent>

export const Default: Story = {
  args: {
    model: {
      name: 'Cars',
      options: [
        { label: 'Car 1', value: 'car1' },
        { label: 'Car 2', value: 'car2' },
        { label: 'Car 3', value: 'car3' },
        { label: 'Car 4', value: 'car4' },
      ],
      controlName: 'car',
    },
  },
}
