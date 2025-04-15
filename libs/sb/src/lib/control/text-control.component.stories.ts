import { Meta, StoryObj } from '@storybook/angular'

import { TextControlComponent } from '@vet-client/lib-control'

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
  args: { tag: 'p' },
}

export const Header1: Story = {
  args: { tag: 'h1' },
}

export const Header2: Story = {
  args: { tag: 'h2' },
}

export const Header3: Story = {
  args: { tag: 'h3' },
}

export const Header4: Story = {
  args: { tag: 'h4' },
}

export const Header5: Story = {
  args: { tag: 'h5' },
}

export const Header6: Story = {
  args: { tag: 'h6' },
}
