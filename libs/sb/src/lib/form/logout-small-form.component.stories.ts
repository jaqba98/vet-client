// done
import type { Meta, StoryObj } from '@storybook/angular';

import { LogoutSmallFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<LogoutSmallFormComponent> = {
  component: LogoutSmallFormComponent,
  title: 'Form/LogoutSmall',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<LogoutSmallFormComponent>;

export const Default: Story = {};
