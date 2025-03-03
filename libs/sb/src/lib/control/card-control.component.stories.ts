import type { Meta, StoryObj } from '@storybook/angular';

import { CardControlComponent } from '@vet-client/lib-control';

const meta: Meta<CardControlComponent> = {
  component: CardControlComponent,
  title: 'Control/Card',
};
export default meta;
type Story = StoryObj<CardControlComponent>;

export const Default: Story = {};

export const Title: Story = {
  args: {
    title: 'Hello'
  }
};

export const MaxWidth640px: Story = {
  args: {
    title: 'Hello'
  }
};
