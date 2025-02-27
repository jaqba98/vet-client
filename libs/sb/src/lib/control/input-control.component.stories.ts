import type { Meta, StoryObj } from '@storybook/angular';

import { InputControlComponent, InputControlTypeEnum } from '@vet-client/lib-control';
import { FormGroup } from '@angular/forms';

const meta: Meta<InputControlComponent> = {
  component: InputControlComponent,
  title: 'Control/Input',
};
export default meta;
type Story = StoryObj<InputControlComponent>;

export const Default: Story = {
  args: {
    model: {
      type: InputControlTypeEnum.text,
      label: 'Login',
      placeholder: 'Enter your login'
    },
    formGroup: new FormGroup({}),
    controlName: 'login'
  }
};
