import type { Meta, StoryObj } from '@storybook/angular';

import { RegistrationPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../utils/storybook-utils.service';

const meta: Meta<RegistrationPageComponent> = {
  component: RegistrationPageComponent,
  title: 'Page/Registration',
  ...StorybookUtilsService.getPageConfiguration()
};
export default meta;
type Story = StoryObj<RegistrationPageComponent>;

export const Default: Story = {};
