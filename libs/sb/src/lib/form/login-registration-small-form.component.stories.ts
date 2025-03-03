import type { Meta, StoryObj } from '@storybook/angular';

import { SmallLoginRegistrationFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<SmallLoginRegistrationFormComponent> = {
  component: SmallLoginRegistrationFormComponent,
  title: 'Form/LoginRegistrationSmall',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<SmallLoginRegistrationFormComponent>;

export const Default: Story = {};
