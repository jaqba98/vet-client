// done
import type { Meta, StoryObj } from '@storybook/angular';

import { TextControlComponent } from '@vet-client/lib-control';

const meta: Meta<TextControlComponent> = {
  component: TextControlComponent,
  title: 'Control/Text',
};
export default meta;
type Story = StoryObj<TextControlComponent>;

export const Paragraph: Story = {
  args: {
    tag: 'p',
    content: 'Hello world',
    color: 'text__dark-primary'
  }
};

export const Header1: Story = {
  args: {
    tag: 'h1',
    content: 'Hello world',
    color: 'text__light-primary'
  }
};

export const Header2: Story = {
  args: {
    tag: 'h2',
    content: 'Hello world',
    color: 'text__primary'
  }
};

export const Header3: Story = {
  args: {
    tag: 'h3',
    content: 'Hello world',
    color: 'text__dark-primary'
  }
};

export const Header4: Story = {
  args: {
    tag: 'h4',
    content: 'Hello world',
    color: 'text__light-primary'
  }
};

export const Header5: Story = {
  args: {
    tag: 'h5',
    content: 'Hello world',
    color: 'text__primary'
  }
};

export const Header6: Story = {
  args: {
    tag: 'h6',
    content: 'Hello world'
  }
};
