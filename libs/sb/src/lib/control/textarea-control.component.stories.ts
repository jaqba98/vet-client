import type { Meta, StoryObj } from '@storybook/angular';

import { TextareaControlComponent } from '@vet-client/lib-control';
import { FormGroup } from '@angular/forms';

const meta: Meta<TextareaControlComponent> = {
  component: TextareaControlComponent,
  title: 'Control/TextArea',
};
export default meta;
type Story = StoryObj<TextareaControlComponent>;

export const Default: Story = {
  args: {
    model: {
      label: 'Message',
      placeholder: 'Enter your message',
      height: '300px'
    },
    formGroup: new FormGroup({}),
    controlName: 'message'
  }
};
