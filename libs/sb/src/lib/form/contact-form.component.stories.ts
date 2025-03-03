import type { Meta, StoryObj } from '@storybook/angular';

import { ContactFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ContactFormComponent> = {
  component: ContactFormComponent,
  title: 'Form/Contact',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ContactFormComponent>;

export const Default: Story = {};
