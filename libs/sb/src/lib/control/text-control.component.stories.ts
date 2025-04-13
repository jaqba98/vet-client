import { Meta, StoryObj } from '@storybook/angular'

import { TextControlComponent } from '@vet-client/lib-control'
import { TextControlTagEnum } from '@vet-client/lib-control'

const meta: Meta<TextControlComponent> = {
  component: TextControlComponent,
  title: 'Control/TextControl',
  args: {
    text: 'Hello World',
  },
}
export default meta
type Story = StoryObj<TextControlComponent>

export const Paragraph: Story = {
  args: {
    tag: TextControlTagEnum.paragraph,
  },
}

export const Header1: Story = {
  args: {
    tag: TextControlTagEnum.header1,
  },
}

export const Header2: Story = {
  args: {
    tag: TextControlTagEnum.header2,
  },
}
